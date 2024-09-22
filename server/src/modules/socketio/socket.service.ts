import { Server, Socket } from "socket.io";
import { ChatController } from "../chat/chat.controller";
import { UserController } from "../user/user.controller";

export class SocketService {
    private io!: Server;

    constructor(
        private readonly userController: UserController,
        private readonly chatController: ChatController
    ) { }

    initialize(server: any): void {
        this.io = new Server(server, {
            cors: {
                origin: 'http://localhost:5173'
            }
        });

        this.io.on("connection", (socket: Socket) => {
            console.log(`NEW SOCKET CONNECTED ${socket.id}`);

            // Start Converastion
            socket.on("startChat", (name: string) => {
                const user = this.userController.createUser(socket.id, name);

                socket.emit("userCreate", {
                    id: socket.id,
                    name: name
                });

                console.log(`Chat started! ${socket.id} Name: ${name}`);

                const chat = this.chatController.startChat(user);

                const chatId = chat.getChatId();
                socket.join(chatId);

                if (chat.isAvailable()) {
                    this.io.to(chatId).emit("waitingForUser", {
                        message: "Waiting for another user . . ."
                    });

                    console.log(`WAITING FOR ANOTHER USER`);
                }

                if (!chat.isAvailable()) {
                    const otherUser = this.chatController.getOtherUser(user);
                    const otherUser2 = user;

                    this.io.to(chatId).emit("userHasFound", {
                        message: "User has been found!",
                        otherUser: otherUser2.getUserName() /* Get the name of other user for the first user */
                    });

                    socket.emit("userHasFound", {
                        message: "User has been found!",
                        otherUser: otherUser?.getUserName() /* Get the name f other user for the second user */
                    });

                    console.log(`USER HAS BEEN FOUND`);

                    setTimeout(() => {
                        this.io.to(chatId).emit("preparing", {
                            message: "Preparing . . ."
                        });

                        console.log(`PREPARING...`);
                    }, 1000);

                    setTimeout(() => {
                        this.io.to(chatId).emit("chatStarted", {
                            chatId, message: "Chat started!"
                        });

                        console.log(`CHAT STARTED...`);
                    }, 2000);
                }
            });

            socket.on("disconnect", () => {
                console.log('User disconnected:', socket.id);
                const userToDisconnect = this.userController.findById(socket.id);

                if (userToDisconnect) {
                    const chat = this.chatController.findChatByUser(userToDisconnect);

                    if (chat) {
                        this.chatController.endChat(chat, userToDisconnect);

                        this.io.to(chat.getChatId()).emit("userHasDisconnected", {
                            message: `${userToDisconnect.getUserName()} has disconnected. The chat ended!`,
                            userId: userToDisconnect.getUserId()
                        });

                        socket.leave(chat.getChatId());

                        if (chat.getUsers().length === 0) {
                            console.log(`Conversation ${chat.getChatId()} is empty and will be removed.`);
                            this.chatController.removeChat(chat);
                        }
                    }

                    this.userController.disconnectUser(socket.id);
                }
            });

            socket.on("leaveChat", () => {
                console.log(`User ${socket.id} has left the chat!`);

                const user = this.userController.findById(socket.id);

                if (user) {
                    const chat = this.chatController.findChatByUser(user);

                    if (chat) {
                        this.chatController.endChat(chat, user);

                        this.io.to(chat.getChatId()).emit("userHasDisconnected", {
                            message: `${user.getUserName()} has left the chat.`,
                            userId: user.getUserId()
                        });

                        if (chat.getUsers().length === 0) {
                            console.log(`Conversation ${chat.getChatId()} is empty and will be removed.`);
                            this.chatController.removeChat(chat);
                        }

                        socket.leave(chat.getChatId());
                    }

                    this.userController.disconnectUser(socket.id);
                }
            })
        });
    }
}
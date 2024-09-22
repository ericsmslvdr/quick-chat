import "dotenv/config";
import express from "express";
import { createServer } from "node:http";
import { SocketService } from "./modules/socketio/socket.service";
import { UserController } from "./modules/user/user.controller";
import { ChatController } from "./modules/chat/chat.controller";
import { ChatService } from "./modules/chat/chat.service";
import { UserService } from "./modules/user/user.service";
import { MessageController } from "./modules/message/message.controller";
import { MessageService } from "./modules/message/message.service";

const app = express();
const server = createServer(app);

const userService = new UserService();
const userController = new UserController(userService);

const chatService = new ChatService();
const chatController = new ChatController(chatService);

const messageService = new MessageService();
const messageController = new MessageController(messageService);

const socketService = new SocketService(userController, chatController, messageController);
socketService.initialize(server);

app.get("/api/chats", (req, res) => {
    const chats = chatController.getAllChats(res);
    return res.json(chats);
});

app.get("/api/users", (req, res) => {
    const users = userController.getAllUsers(res);
    return res.json(users);
});

server.listen(3000, () => {
    console.log("Server running in port 3000");
});

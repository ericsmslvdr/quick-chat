import { Response } from "express";
import { Message } from "../message/message.entity";
import { User } from "../user/user.entity";
import { Chat } from "./chat.entity";
import { ChatService } from "./chat.service";

export class ChatController {

    constructor(private readonly chatService: ChatService) { }

    startChat(user: User): Chat {
        const availableChat = this.chatService.findAvailable();

        if (!availableChat) {
            return this.chatService.create(user);
        }

        this.chatService.addUser(user, availableChat);
        return availableChat;
    }

    endChat(chat: Chat, user: User): void {
        this.chatService.end(chat, user);
    }

    removeChat(chat: Chat): void {
        this.chatService.remove(chat);
    }

    sendMessage(message: Message, chat: Chat): Message | undefined {
        return this.chatService.addMessage(message, chat);
    }

    findChatByUser(user: User): Chat | undefined {
        return this.chatService.findByUser(user);
    }

    getAllChats(res: Response): Chat[] {
        res.json(this.chatService.list());
        return this.chatService.list();
    }

    getOtherUser(user: User): User | undefined {
        return this.chatService.getOtherUser(user);
    }
}
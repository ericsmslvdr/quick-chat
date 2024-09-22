import { Message } from "../message/message.entity";
import { User } from "../user/user.entity";
import { Chat } from "./chat.entity";

export class ChatService {
    private chats: Chat[] = [];

    findAvailable(): Chat | undefined {
        return this.chats.find(chat => chat.isAvailable())
    }

    create(user: User): Chat {
        const chat = new Chat(`c_${Date.now()}`, [user]);
        this.chats.push(chat);
        return chat;
    }

    addUser(user: User, chat: Chat): void {
        chat.addUser(user);
    }

    addMessage(message: Message, chat: Chat): Message | undefined {
        const chatId = chat.getChatId();
        const foundChat = this.findById(chatId);

        if (!foundChat) {
            return undefined;
        }

        return chat.addMessage(message);
    }

    findById(chatId: string): Chat | undefined {
        return this.chats.find(chat => chat.getChatId() === chatId);
    }

    end(chat: Chat, user: User): void {
        const id = chat.getChatId();
        const foundChat = this.chats.find(chat => chat.getChatId() === id);

        if (!foundChat) {
            return;
        }

        foundChat.removeUser(user);
    }

    remove(chat: Chat): void {
        this.chats = this.chats.filter(c => c.getChatId() !== chat.getChatId());
    }

    findByUser(user: User): Chat | undefined {
        return this.chats.find(c => c.hasUser(user));
    }

    list(): Chat[] {
        return this.chats;
    }

    getOtherUser(chat: Chat, user: User): User | undefined {
        const users = chat.getUsers();
        const otherUser = users.find(u => u.getUserId() !== user.getUserId());
        return otherUser;
    }
}
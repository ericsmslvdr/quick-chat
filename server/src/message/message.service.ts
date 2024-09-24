import { Message } from "./message.entity";

export class MessageService {
    private messages: Message[] = [];

    create(senderId: string, content: string): Message {
        const message = new Message(senderId, content, new Date());
        this.messages.push(message);
        return message;
    }

    get(chatUsersIds: string[]): Message[] {
        return this.messages.filter(message => chatUsersIds.includes(message.getSenderId()));
    }
}
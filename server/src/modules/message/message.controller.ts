import { Message } from "./message.entity";
import { MessageService } from "./message.service";

export class MessageController {

    constructor(private readonly messageService: MessageService) { }

    sendMessage(senderId: string, content: string): Message {
        return this.messageService.create(senderId, content);
    }

    getMessagesByChat(chatUsersIds: string[]): Message[] {
        return this.messageService.get(chatUsersIds);
    }
}
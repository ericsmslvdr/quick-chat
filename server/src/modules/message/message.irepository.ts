import { Message } from "./message.entity";

export interface IMessageRepository {
    create(conversationId: string, participantId: string, content: string): Promise<Message>;
}
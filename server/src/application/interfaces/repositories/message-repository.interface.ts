import { Message } from "../../../domain/entities/message.entity";

export interface IMessageRepository {
    create(conversationId: string, participantId: string, content: string): Promise<Message>;
}
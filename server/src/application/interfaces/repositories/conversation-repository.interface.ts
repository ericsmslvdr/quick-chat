import { Conversation } from "../../../domain/entities/conversation.entity";

export interface IConversationRepository {
    create(participantId: string): Promise<Conversation>;
    find(): Promise<Conversation | null>;
    join(status: string): Promise<Conversation>;
}
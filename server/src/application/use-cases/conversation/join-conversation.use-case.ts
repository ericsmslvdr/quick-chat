import { Conversation } from "../../../domain/entities/conversation.entity";
import { IConversationRepository } from "../../interfaces/repositories/conversation-repository.interface";
import { UseCase } from "../use-case";

export class JoinConversationUseCase implements UseCase<Conversation, Conversation> {

    constructor(private readonly conversationRepository: IConversationRepository) { }

    async execute(input: Conversation): Promise<Conversation> {
        const status = input.status;
        const result = await this.conversationRepository.join(status);

        return result;
    }
}
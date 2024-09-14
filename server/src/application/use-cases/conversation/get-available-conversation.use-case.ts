import { Conversation } from "../../../domain/entities/conversation.entity";
import { IConversationRepository } from "../../interfaces/repositories/conversation-repository.interface";
import { UseCase } from "../use-case";

export class GetAvailableUseCase implements UseCase<Conversation, Conversation> {

    constructor(private readonly conversationRepository: IConversationRepository) { }

    async execute(input: Conversation): Promise<Conversation> {

        const availableConversation = await this.conversationRepository.find();

        return availableConversation!;
    }
}
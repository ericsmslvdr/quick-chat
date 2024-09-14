// import { Conversation } from "../../../domain/entities/conversation.entity";
// import { User } from "../../../domain/entities/user.entity";
// import { IConversationRepository } from "../../interfaces/repositories/conversation-repository.interface";
// import { UseCase } from "../use-case";

// export class CreateConversationUseCase implements UseCase<User, Conversation> {

//     constructor(private readonly conversationRepository: IConversationRepository) { }

//     async execute(input: User): Promise<Conversation> {
//         const id = input.id;
//         const createdConversation = await this.conversationRepository.create(id!);

//         return createdConversation;
//     }
// }
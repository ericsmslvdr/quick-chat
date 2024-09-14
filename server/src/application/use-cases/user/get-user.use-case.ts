import { User } from "../../../domain/entities/user.entity";
import { UserByIdDTO } from "../../dtos/user/user-by-id.dto";
import { IUserRepository } from "../../interfaces/repositories/user-repository.interface";
import { UseCase } from "../use-case";

export class GetUserUseCase implements UseCase<UserByIdDTO, User | null> {

    constructor(private readonly userRepository: IUserRepository) { }

    async execute(input: UserByIdDTO): Promise<User | null> {
        return await this.userRepository.find(Number(input.id));
    }
}
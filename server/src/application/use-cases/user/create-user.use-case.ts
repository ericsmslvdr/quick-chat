import { User } from "../../../domain/entities/user.entity";
import { CreateUserDTO } from "../../dtos/user/create-user.dto";
import { IUserRepository } from "../../interfaces/repositories/user-repository.interface";
import { UseCase } from "../use-case";

export class CreateUserUseCase implements UseCase<CreateUserDTO, User> {

    constructor(private readonly userRepository: IUserRepository) { }

    async execute(input: CreateUserDTO): Promise<User> {
        return await this.userRepository.create(input.name, input.socketId);
    }
} 
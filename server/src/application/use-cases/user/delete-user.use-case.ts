import { UserByIdDTO } from "../../dtos/user/user-by-id.dto";
import { IUserRepository } from "../../interfaces/repositories/user-repository.interface";
import { UseCase } from "../use-case";

export class DeleteUserUseCase implements UseCase<UserByIdDTO, boolean> {

    constructor(private readonly userRepository: IUserRepository) { }

    async execute(input: UserByIdDTO): Promise<boolean> {
        return await this.userRepository.delete(Number(input.id));
    }
}
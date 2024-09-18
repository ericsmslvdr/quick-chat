import { CreateUserDTO, UserByIdDTO } from "../../shared/dtos/user.dto";
import { User } from "./user.entity";
import { IUserRepository } from "./user.irepository";
import { IUserService } from "./user.iservice";

export class UserService implements IUserService {

    constructor(private readonly userRepository: IUserRepository) { }

    createUser(input: CreateUserDTO): Promise<User> {
        return this.userRepository.create(input.name, input.socketId);
    }
    findById(input: UserByIdDTO): Promise<User | null> {
        return this.userRepository.find(parseInt(input.id));
    }
    deleteById(input: UserByIdDTO): Promise<boolean> {
        return this.userRepository.delete(parseInt(input.id));
    }
}
import { CreateUserRequest, CreateUserResponse, User } from "../types/user-types";
import UserServiceInterface from '../interfaces/user-service-interface';
import UserRepositoryInterface from '../interfaces/user-repository-interface';
import { generateToken } from '../lib/jwt';

export default class UserService implements UserServiceInterface {
    private readonly userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    async createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
        const user = await this.userRepository.create(userData);

        const token = generateToken(user);

        return { ...user, token };
    }

    async getAllUsers(): Promise<User[]> {
        const users = this.userRepository.show();

        return users;
    }
}
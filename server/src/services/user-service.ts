import jwt from 'jsonwebtoken';
import UserRepository from "../database/repositories/user-repository";
import { CreateUserRequest, CreateUserResponse, User } from "../types/user-types";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

export default class UserService {

    constructor(private readonly userRepository: UserRepository) { }

    async createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
        const user = await this.userRepository.createUser(userData);

        // add jwt
        const token = jwt.sign(user, PRIVATE_KEY, {
            expiresIn: '1h',
        });

        return { ...user, token };
    }

    async getAllUsers(): Promise<User[]> {
        const users = this.userRepository.getAllUsers();

        return users;
    }
}
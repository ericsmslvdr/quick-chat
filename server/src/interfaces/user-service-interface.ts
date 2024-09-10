import { CreateUserRequest, CreateUserResponse, User } from "../types/user-types";

export default interface UserServiceInterface {
    createUser(userData: CreateUserRequest): Promise<CreateUserResponse>;
    getAllUsers(): Promise<User[]>;
    // findById(id: string): Promise<User | null>;
}
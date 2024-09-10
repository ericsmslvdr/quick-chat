import { CreateUserRequest, User } from "../types/user-types";

export default interface UserRepositoryInterface {
    create(userData: CreateUserRequest): Promise<User>;
    show(): Promise<User[]>;
    find(id: string): Promise<User | null>;
}
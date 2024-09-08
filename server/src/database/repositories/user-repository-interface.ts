import { CreateUserRequest, User } from "../../types/user-types"

export default interface UserRepositoryInterface {
    createUser(userData: CreateUserRequest): Promise<User>;
    getAllUsers(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
}
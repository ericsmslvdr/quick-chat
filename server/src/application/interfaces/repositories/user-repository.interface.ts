import { User } from "../../../domain/entities/user.entity";

export interface IUserRepository {
    create(name: string, socketId: string): Promise<User>;
    find(userId: number): Promise<User>;
    delete(userId: number): Promise<void>;
}
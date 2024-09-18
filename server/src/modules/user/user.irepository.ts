import { User } from "./user.entity";

export interface IUserRepository {
    create(name: string, socketId: string): Promise<User>;
    find(userId: number): Promise<User | null>;
    delete(userId: number): Promise<boolean>;
}
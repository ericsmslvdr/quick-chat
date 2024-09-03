import { IUser } from "../../models/UserModel";

export interface IUserRepository {
    create(userData: IUser): Promise<IUser>;
    findById(id: string): Promise<IUser | null>;
    findAll(): Promise<IUser[]>;
}
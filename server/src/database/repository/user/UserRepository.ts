import UserModel, { IUser } from "../../models/UserModel";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
    async create(userData: Partial<IUser>): Promise<IUser> {
        const newUser = await UserModel.create(userData);
        return newUser;
    }

    async findById(id: string): Promise<IUser | null> {
        const user = await UserModel.findById(id);
        return user;
    }

    async findAll(): Promise<IUser[]> {
        const users = await UserModel.find();
        return users;
    }
}

export default UserRepository;
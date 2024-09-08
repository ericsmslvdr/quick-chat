import { CreateUserRequest, User } from "../../types/user-types";
import UserModel from "../models/user-model"
import UserRepositoryInterface from "./user-repository-interface";

export default class UserRepository implements UserRepositoryInterface {

    constructor(private readonly userModel: UserModel) { }

    async createUser(userData: CreateUserRequest): Promise<User> {
        return await this.userModel.create(userData);
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.show();
    }

    async findById(id: string): Promise<User | null> {
        return await this.userModel.find(id);
    }
}
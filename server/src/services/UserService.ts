import { IUser } from "../database/models/UserModel";
import UserRepository from "../database/repository/user/UserRepository";

class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async createUser(userData: IUser): Promise<IUser | Error> {
        if (!userData) {
            throw new Error('Error creating user: Missing user data!');
        }

        const response = await this.userRepository.create(userData);

        if (response instanceof Error) {
            return response;
        }

        return response;
    }

    async getUserById(id: string): Promise<IUser | null> {
        const user = await this.userRepository.findById(id);
        return user;
    }

    async getAllUsers(): Promise<IUser[]> {
        const users = await this.userRepository.findAll();
        return users;
    }
}

export default UserService;
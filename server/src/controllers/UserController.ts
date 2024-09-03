import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    constructor(private userService: UserService) { }

    async createUser(req: Request, res: Response) {
        try {
            const userData = req.body;
            const newUser = await this.userService.createUser(userData);

            if (newUser instanceof Error) {
                return res.status(400).json({ message: newUser.message });
            }

            return res.status(200).json({ data: newUser });
        } catch (error) {
            console.error(`Error: ${error}`);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async getUserById(req: Request, res: Response) {
        const userId = req.params.id;
        const user = await this.userService.getUserById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ data: user });
    }

    async getAllUsers(req: Request, res: Response) {
        const users = await this.userService.getAllUsers();
        return res.status(200).json({ data: users });
    }
}

export default UserController;
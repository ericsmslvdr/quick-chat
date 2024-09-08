import { NextFunction, Request, RequestHandler, Response } from "express";
import UserService from "../services/user-service";

class UserController {

    constructor(private readonly userService: UserService) { }

    async createUser(req: Request, res: Response) {
        try {
            const { name, socket_id, is_matched } = req.body;

            const { token, ...user } = await this.userService.createUser({ name, socket_id, is_matched });

            res.status(201).json({
                message: "User successfully created",
                token,
                user
            });

        } catch (error) {
            console.error(error);
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.getAllUsers();

            res.status(201).json({ users });
        } catch (error) {
            console.error(error);
        }
    }
}

export default UserController;
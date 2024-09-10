import { NextFunction, Request, RequestHandler, Response } from "express";
import UserServiceInterface from "../interfaces/user-service-interface";

export default class UserController {
    private readonly userService: UserServiceInterface;

    constructor(userService: UserServiceInterface) {
        this.userService = userService;
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, socket_id, is_matched } = req.body;

            const { token, ...user } = await this.userService.createUser({ name, socket_id, is_matched });

            res.status(201).json({
                message: "User successfully created",
                token,
                user
            });

        } catch (error) {
            next(error);
        }
    }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.getAllUsers();

            res.status(201).json({ users });
        } catch (error) {
            next(error);
        }
    }
}
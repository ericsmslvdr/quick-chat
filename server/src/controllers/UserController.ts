import { NextFunction, Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";
import { IUser } from "../interfaces/IUser";

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

class UserController {

    constructor(private readonly userModel: UserModel) { }

    public createUser: RequestHandler<unknown, unknown, IUser, unknown> = async (req, res) => {
        try {
            const { name, socket_id, is_matched } = req.body;

            const user = await this.userModel.create({ name, socket_id, is_matched });

            // add jwt
            const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: '1h' });

            res.status(201).json({
                user,
                message: "User successfully created"
            });

        } catch (error) {
            console.error(error);
        }
    }

    public async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userModel.show();

            res.status(201).json({ users });
        } catch (error) {
            console.error(error);
        }
    }
}

export default UserController;
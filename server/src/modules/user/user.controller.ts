import { NextFunction, Request, Response } from "express";
import { IUserService } from "./user.iservice";
import { AppError } from "../../shared/middlewares/error-handler.middleware";
import { CreateUserDTO, UserByIdDTO } from "../../shared/dtos/user.dto";

export class UserController {

    constructor(
        private userService: IUserService,
    ) { }

    // POST /api/users/
    async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, socketId } = req.body;

            if (!name || !socketId) {
                throw new AppError("Name and socket id fields are required!", 400);
            }

            const createUserDto = new CreateUserDTO(name, socketId);
            const result = await this.userService.createUser(createUserDto);

            res.status(201).json({
                message: "User created successfully!",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    // POST /api/users/123
    async findUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const findUserDto = new UserByIdDTO(id);
            const result = await this.userService.findById(findUserDto);

            if (!result) {
                throw new AppError(`User with id: ${id} does not exist`, 404);
            }

            res.status(200).json({
                message: "User found successfully!",
                data: result
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            const deleteUserDto = new UserByIdDTO(id);
            const result = await this.userService.deleteById(deleteUserDto);

            if (!result) {
                throw new AppError(`Cannot delete a user that doesn't exist.`, 404);
            }

            res.status(200).json({
                message: "User deleted successfully!"
            });
        } catch (error) {
            next(error);
        }
    }
}
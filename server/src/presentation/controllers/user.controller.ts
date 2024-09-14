import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { GetUserUseCase } from "../../application/use-cases/user/get-user.use-case";
import { CreateUserDTO } from "../../application/dtos/user/create-user.dto";
import { UserByIdDTO } from "../../application/dtos/user/user-by-id.dto";
import { DeleteUserUseCase } from "../../application/use-cases/user/delete-user.use-case";
import { AppError } from "../middlewares/error-handler";

export class UserController {

    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase,
        private deleteUserUserCase: DeleteUserUseCase
    ) { }

    // POST /api/users/
    async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { name, socketId } = req.body;

            if (!name || !socketId) {
                throw new AppError("Name and socket id fields are required!", 400);
            }

            const createUserDto = new CreateUserDTO(name, socketId);
            const result = await this.createUserUseCase.execute(createUserDto);

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
            const result = await this.getUserUseCase.execute(findUserDto);

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
            const result = await this.deleteUserUserCase.execute(deleteUserDto);

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
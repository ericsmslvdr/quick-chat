import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { GetUserUseCase } from "../../application/use-cases/user/get-user.use-case";
import { CreateUserDTO } from "../../application/dtos/user/create-user.dto";
import { UserByIdDTO } from "../../application/dtos/user/user-by-id.dto";
import { DeleteUserUseCase } from "../../application/use-cases/user/delete-user.use-case";

export class UserController {

    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase,
        private deleteUserUserCase: DeleteUserUseCase
    ) { }

    // POST /api/users/
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { name, socket_id } = req.body;
            const createUserDto = new CreateUserDTO(name, socket_id);
            const user = await this.createUserUseCase.execute(createUserDto);

            res.status(201).json({
                message: "User created successfully!",
                data: user
            })
        } catch (error) {
            console.error(`ERROR FROM CREATE USER CONTROLLER: ${error}`);
        }
    }

    // POST /api/users/123
    async findUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const findUserDto = new UserByIdDTO(id);
            const result = await this.getUserUseCase.execute(findUserDto);

            res.status(200).json({
                message: "User found successfully!",
                data: result
            })

        } catch (error) {
            console.error(`ERROR FROM FIND USER CONTROLLER: ${error}`)
        }
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const deleteUserDto = new UserByIdDTO(id);
            await this.deleteUserUserCase.execute(deleteUserDto);

            res.status(200).json({
                message: "User deleted successfully!"
            })
        } catch (error) {
            console.error(`ERROR FROM DELETE USER CONTROLLER ${error}`);
        }
    }
}
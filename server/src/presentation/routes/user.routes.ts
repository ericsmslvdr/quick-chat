import { Router } from "express";
import { MySQLDatabaseService } from "../../infrastructure/database/mysql-database.service";
import { MySQLUserRepository } from "../../infrastructure/database/repositories/mysql-user.repository";
import { CreateUserUseCase } from "../../application/use-cases/user/create-user.use-case";
import { UserController } from "../controllers/user.controller";
import { GetUserUseCase } from "../../application/use-cases/user/get-user.use-case";
import { DeleteUserUseCase } from "../../application/use-cases/user/delete-user.use-case";

const userRoutes = Router();

const databaseService = new MySQLDatabaseService();
const mysqlUserRepository = new MySQLUserRepository(databaseService);

const createUser = new CreateUserUseCase(mysqlUserRepository);
const getUser = new GetUserUseCase(mysqlUserRepository);
const deleteUser = new DeleteUserUseCase(mysqlUserRepository);

const userController = new UserController(createUser, getUser, deleteUser);

userRoutes.get('/:id', userController.findUser.bind(userController));
userRoutes.delete('/:id', userController.deleteUser.bind(userController));
userRoutes.post('/', userController.createUser.bind(userController));

export default userRoutes;
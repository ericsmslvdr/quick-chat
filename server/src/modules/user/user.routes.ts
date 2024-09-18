import { Router } from "express";
import { DatabaseService } from "../database/database.service";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

const userRoutes = Router();

const databaseService = new DatabaseService();
const userRepository = new UserRepository(databaseService);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.get('/:id', userController.findUser.bind(userController));
userRoutes.delete('/:id', userController.deleteUser.bind(userController));
userRoutes.post('/', userController.createUser.bind(userController));

export default userRoutes;
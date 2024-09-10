import { Router } from "express";
import UserRepository from "../repositories/user-repository";
import UserService from "../services/user-service";
import UserController from "../controllers/user-controller";
import Database from "../database";

const userRouter = Router();

const database = new Database();
const userRepository = new UserRepository(database);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.post("/", userController.createUser.bind(userController));
userRouter.get("/", userController.getAllUsers.bind(userController));

export default userRouter;
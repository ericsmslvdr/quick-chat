import { Router } from "express";
import Database from "../database/database";
import UserModel from "../database/models/user-model";
import UserRepository from "../database/repositories/user-repository";
import UserService from "../services/user-service";
import UserController from "../controllers/user-controller";

const userRouter = Router();

const database = new Database();
const userModel = new UserModel(database);
const userRepository = new UserRepository(userModel);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRouter.post("/", userController.createUser.bind(userController));
userRouter.get("/", userController.getAllUsers.bind(userController));

export default userRouter;
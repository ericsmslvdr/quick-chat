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

userRouter.post("/", (req, res) => userController.createUser(req, res));
userRouter.get("/", (req, res) => userController.getAllUsers(req, res));

export default userRouter;
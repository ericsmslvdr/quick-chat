import { Router } from "express";
import UserRepository from "../database/repository/user/UserRepository";
import UserService from "../services/UserService";
import UserController from "../controllers/UserController";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const userRouter = Router();

userRouter.get('/', (req, res) => userController.getAllUsers(req, res));
userRouter.get('/:id', (req, res) => userController.getUserById(req, res));
userRouter.post('/', (req, res) => userController.createUser(req, res));

export default userRouter;
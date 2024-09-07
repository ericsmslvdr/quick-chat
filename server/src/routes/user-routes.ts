import { Router } from "express";
import UserController from "../controllers/UserController";
import UserModel from "../models/UserModel";

const userRouter = Router();

const userModel = new UserModel();
const userController = new UserController(userModel);

userRouter.post("/", (req, res, next) => userController.createUser(req, res, next));
userRouter.get("/", (req, res, next) => userController.getAllUsers(req, res, next));

export default userRouter;
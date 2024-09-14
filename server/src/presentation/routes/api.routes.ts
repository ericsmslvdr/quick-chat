import { Router } from "express";
import userRoutes from "./user.routes";

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes);

export default apiRoutes;
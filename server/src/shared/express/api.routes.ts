import { Router } from "express";
import userRoutes from "../../modules/user/user.routes";

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes);
// other routes e.g. /conversations, /messages, etc.

export default apiRoutes;
// import { NextFunction, Request, Response } from "express";

// export function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
//     if (error instanceof MongooseError && error === 11000) {
//         return res.status(400).json({ message: "Socket ID already exists" })
//     }
// }
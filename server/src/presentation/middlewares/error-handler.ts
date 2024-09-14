// import { NextFunction } from "express";

// interface CustomError extends Error {
//     status?: number
// }

// export function errorHandler(error: CustomError, req: Request, res: Response, next: NextFunction): void {
//     console.error(error.message);

//     res.status(error.status || 500).json({
//         message: error.message || "Internal Server Error",
//         status: error.status || 500
//     });
// }
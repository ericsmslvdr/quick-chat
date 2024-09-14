import { NextFunction, Request, Response } from "express";

export class AppError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export function errorHandler(error: AppError, req: Request, res: Response, next: NextFunction): void {
    const statusCode = error.status || 500;
    const message = error.message || "Internal Server Error";

    res.status(statusCode).json({
        message: message,
        status: statusCode,
        success: false
    });
}

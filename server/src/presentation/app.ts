import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import apiRouter from "./routes/api.routes";
import { errorHandler } from "./middlewares/error-handler";

const app: Application = express();

// Middleware for parsing json
app.use(express.json());
app.use(
    cors({
        allowedHeaders: ["Content-Type"],
        methods: ["GET", "POST", "PATCH", "DELETE"],
        origin: ["http://localhost:5173"],
        credentials: true,
    })
);

// Cookie parser middleware
app.use(cookieParser());

// Security middlewares

// Routes
app.use("/api", apiRouter);

//Global error handler
app.use(errorHandler);

export default app;
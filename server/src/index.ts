import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import apiRouter from "./api";
import connectToDatabase from "./database/connection";
// import { errorHandler } from "./api/middlewares/error-handler";

dotenv.config();

const PORT = process.env.PORT!;

(async () => await connectToDatabase())();

const app = express();

// app.use(
//   cors({
//     // allowedHeaders: ["Content-Type"],
//     // methods: ["GET", "POST", "PATCH", "DELETE"],
//     // origin: [],
//     // credentials: true,
//   })
// );

// Middlewares
app.use(cookieParser());
app.use(express.json());
// app.use(errorHandler);

// Routes
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
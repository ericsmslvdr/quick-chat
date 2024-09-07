import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { createServer } from "node:http";
import { Server } from "socket.io";

import apiRouter from "./routes";
// import { errorHandler } from "./api/middlewares/error-handler";

const PORT = process.env.PORT!;

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
});

app.use(
  cors({
    allowedHeaders: ["Content-Type"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Middlewares
app.use(cookieParser());
app.use(express.json());
// app.use(errorHandler);

// Routes
app.use("/api", apiRouter);

io.on('connection', (socket) => {
  console.log(`a user connected! ${socket.id}`);
  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
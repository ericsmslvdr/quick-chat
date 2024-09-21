import "dotenv/config";
import express from "express";
import { createServer } from "node:http";
import { SocketService } from "./modules/socketio/socket.service";
import { UserController } from "./modules/user/user.controller";
import { ChatController } from "./modules/chat/chat.controller";
import { ChatService } from "./modules/chat/chat.service";
import { UserService } from "./modules/user/user.service";

const app = express();
const server = createServer(app);

const userService = new UserService();
const userController = new UserController(userService);

const chatService = new ChatService();
const chatController = new ChatController(chatService);

const socketService = new SocketService(userController, chatController);
socketService.initialize(server);

server.listen(3000, () => {
    console.log("Server running in port 3000");
});

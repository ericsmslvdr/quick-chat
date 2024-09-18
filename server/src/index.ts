import { createServer } from "node:http";
import { Server } from "socket.io";
import app from "./shared/express/app";

const PORT = process.env.PORT!;

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on('connection', (socket) => {
    console.log(`a user connected! ${socket.id}`);
    socket.on('disconnect', () => {
        console.log('a user disconnected!');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
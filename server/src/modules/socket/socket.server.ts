import { Server } from "socket.io";

export class SocketServer {
    private io: Server;

    constructor(httpServer: any) {
        this.io = new Server(httpServer, {
            cors: {
                origin: "http://localhost:5173",
                methods: ["GET", "POST", "PATCH", "DELETE"],
            }
        });
    }

    getSocketIoInstance(): Server {
        return this.io;
    }
}
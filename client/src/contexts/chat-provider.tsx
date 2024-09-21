import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type Status = 'waiting' | 'found' | 'preparing' | 'started' | 'disconnected';

type ChatContextType = {
    user: string;
    setUser: Dispatch<SetStateAction<string>>;
    message: string;
    status: Status | null;
    newSocket: Socket | null;
    leaveChat: () => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export function ChatProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<Status | null>(null);
    const [newSocket, setNewSocket] = useState<Socket | null>(null);
    const socket = io(SERVER_URL);

    function leaveChat() {
        socket.emit("leaveChat");
        setMessage("You have left the chat");
    }

    useEffect(() => {
        socket.on("connect", () => {
            console.log(`Connected to server ${socket.id}`);
            setNewSocket(socket);
        });

        socket.on("waitingForUser", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("waiting");
        });

        socket.on("userHasFound", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("found");
        });

        socket.on("preparing", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("preparing");
        });

        socket.on("chatStarted", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("started");
        });

        socket.on("userHasDisconnected", (data) => {
            console.log(`${data.message, data.userId}`);
            setMessage(data.message);
            setStatus('disconnected');
        });

        return () => {
            socket.disconnect();
        };

    }, []);

    const value = {
        user,
        setUser,
        message,
        status,
        newSocket,
        leaveChat
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}
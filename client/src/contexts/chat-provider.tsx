import { createContext, ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

type Status = 'waiting' | 'found' | 'preparing' | 'started' | 'disconnected' | null;

type ChatContextType = {
    user: CurrentUser | undefined;
    message: string;
    status: Status | null;
    isOtherUserDisconnected: boolean;
    leaveChat: () => void;
    startChat: (name: string) => void;
    otherUser: string | undefined;
};

type CurrentUser = {
    id: string,
    name: string
}

export const ChatContext = createContext<ChatContextType | null>(null);

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export function ChatProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<CurrentUser | undefined>(undefined);
    const [message, setMessage] = useState<string>("");
    const [status, setStatus] = useState<Status | null>(null);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [otherUser, setOtherUser] = useState<string | undefined>(undefined);
    const [isOtherUserDisconnected, setIsOtherUserDisconnected] = useState<boolean>(false);

    console.log(`STATUS: ${status}`);
    console.log(`MESSAGE: ${message}`);
    console.log(`USER: ${JSON.stringify(user)}`);
    console.log(`OTHER USER: ${otherUser}`);

    function leaveChat() {
        socket?.emit("leaveChat");
        setMessage("You have left the chat");
        setStatus(null);
    }

    function startChat(name: string) {
        socket?.emit("startChat", name);
    }

    useEffect(() => {
        const newSocket = io(SERVER_URL);
        setSocket(newSocket);

        newSocket.connect();

        newSocket.on("connect", () => {
            console.log(`ID: ${newSocket.id}`);
        });

        newSocket.on("userCreate", (data) => {
            setUser({
                id: data.id,
                name: data.name
            });
        });

        newSocket.on("waitingForUser", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("waiting");
        });

        newSocket.on("userHasFound", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setOtherUser(data.otherUser);
            setStatus("found");
        });

        newSocket.on("preparing", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("preparing");
        });

        newSocket.on("chatStarted", (data) => {
            console.log(data.message);
            setMessage(data.message);
            setStatus("started");
            setIsOtherUserDisconnected(false);
        });

        newSocket.on("userHasDisconnected", (data) => {
            console.log(`${data.message, data.userId}`);
            setMessage(data.message);
            setIsOtherUserDisconnected(true);
        });

        return () => {
            newSocket.disconnect();
        };

    }, []);

    const value = {
        user,
        message,
        status,
        leaveChat,
        startChat,
        isOtherUserDisconnected,
        otherUser
    };

    return (
        <ChatContext.Provider value={value}>
            {children}
        </ChatContext.Provider>
    );
}
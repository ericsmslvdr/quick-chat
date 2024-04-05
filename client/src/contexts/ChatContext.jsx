import { axiosInstance } from "@configs/axios";
import { createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    const startSession = async (userId) => {
        const chatRes = await axiosInstance.post('/api/chats/start', { user: userId })
    }

    const contextValue = {
        startSession
    }

    return (
        <ChatContext.Provider value={contextValue}>
            {children}
        </ChatContext.Provider>
    )
}


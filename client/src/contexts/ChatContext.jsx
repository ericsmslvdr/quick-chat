import { axiosInstance } from "@configs/axios";
import { createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    const startSession = async (userId) => {
        const chatRes = await axiosInstance.post('/api/chats/start', { user: userId })
        return chatRes
    }

    const getChatList = async (chatSessionId) => {
        const chatList = await axiosInstance.get(`/api/chats/${chatSessionId}`)
        return chatList
    }

    const contextValue = {
        startSession,
        getChatList
    }

    return (
        <ChatContext.Provider value={contextValue}>
            {children}
        </ChatContext.Provider>
    )
}


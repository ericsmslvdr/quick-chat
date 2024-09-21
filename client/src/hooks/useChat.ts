import { useContext } from "react";
import { ChatContext } from "@contexts/chat-provider";

export function useChat() {
    const chat = useContext(ChatContext);

    if (!chat) {
        throw new Error("");
    }

    return chat;
}
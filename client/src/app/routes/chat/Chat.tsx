import { ChatLayout } from "@components/layouts";
import { ChatContainer, ParticipantsInfoContainer } from "@components/ui";

const Chat = () => {
    return (
        <ChatLayout>
            <ParticipantsInfoContainer />
            <ChatContainer />
        </ChatLayout>
    )
}

export default Chat;
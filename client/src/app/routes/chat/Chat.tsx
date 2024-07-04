import { ContentLayout } from "@components/layouts";
import { ChatContainer, ParticipantsInfoContainer } from "@components/ui";

const Chat = () => {
    return (
        <ContentLayout>
            <ParticipantsInfoContainer />
            <ChatContainer />
        </ContentLayout>
    )
}

export default Chat;
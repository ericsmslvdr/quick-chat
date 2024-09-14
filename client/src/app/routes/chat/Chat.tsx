import { ContentLayout } from "@components/layouts";
import { ChatContainer, ParticipantsInfoContainer } from "@components/ui";
import { io } from "socket.io-client";

function Chat() {
    const socket = io("http://localhost:3000");
    // const socket = io("https://server-domain.com");

    socket.on("connect", () => {
        console.log(socket.id);
    })

    return (
        <ContentLayout>
            <ParticipantsInfoContainer />
            <ChatContainer />
        </ContentLayout>
    )
}

export default Chat;
import { ContentLayout } from "@components/layouts";
import Card from "@components/ui/card/Card";
import MessageForm from "@features/messages/components/message-form";
import { io } from "socket.io-client";
import style from "./conversation.module.css";

function OtherUserBox() {
    return (
        <Card>
            <p>Other user</p>
        </Card>
    );
}

function CurrentUserBox() {
    return (
        <Card>
            <p>Current user</p>
        </Card>
    );
}

function ParticipantsInfoContainer() {
    return (
        <Card className={style["participants-card"]}>
            <CurrentUserBox />
            <span className={style["participants-card__text"]}>Your'e chatting with:</span>
            <OtherUserBox />
        </Card>
    );
}


function ChatBubble({ isUserAuth }: { isUserAuth: boolean }) {
    return (
        <div className={`
      ${style["chats__chat-bubble"]}
      ${isUserAuth
                ? style["chats__chat-bubble--me"]
                : style["chats__chat-bubble--chatmate"]
            }
      `}>
            ChatBubblelorem ipsum sample textlorem ipsum sample textlorem ipsum sample text
        </div>
    );
}

function ConversationContainer() {
    return (
        <Card className={style["chat-container"]}>
            <div className={style.chats}>
                <ChatBubble isUserAuth={true} />
                <ChatBubble isUserAuth={false} />
                <ChatBubble isUserAuth={false} />
                <ChatBubble isUserAuth={true} />
            </div>

            <MessageForm />
        </Card>
    );
}

function ConversationRoute() {
    // const socket = io("http://localhost:3000");
    // const socket = io("https://server-domain.com");

    // socket.on("connect", () => {
    //     console.log(socket.id);
    // });

    return (
        <ContentLayout>
            <ParticipantsInfoContainer />

            <ConversationContainer />
        </ContentLayout>
    );
}

export default ConversationRoute;
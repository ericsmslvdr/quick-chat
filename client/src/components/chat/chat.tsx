import { Card } from "@components/ui/card";
import { MessageForm } from "@components/ui/form";

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
        <Card className="flex flex-col gap-3 w-2/5">
            <CurrentUserBox />
            <span className="mt-12">Your'e chatting with:</span>
            <OtherUserBox />
        </Card>
    );
}


function ChatBubble({ isUserAuth }: { isUserAuth: boolean }) {
    return (
        <div className={`
            text-white max-w-[70%] py-2 px-3 rounded-xl
      ${isUserAuth
                ? 'self-end bg-blue-400'
                : 'self-start bg-gray-500'
            }
      `}>
            ChatBubblelorem ipsum sample textlorem ipsum sample textlorem ipsum sample text
        </div>
    );
}

function ChatContainer() {
    return (
        <Card className="flex flex-col justify-end gap-4 w-3/5">
            <div className="flex flex-col gap-3 overflow-y-auto">
                <ChatBubble isUserAuth={true} />
                <ChatBubble isUserAuth={false} />
                <ChatBubble isUserAuth={false} />
                <ChatBubble isUserAuth={true} />
            </div>

            <MessageForm />
        </Card>
    );
}

export function Chat() {
    // const { status, message } = useSocket();

    // if (status !== "started") {
    //     return <Waiting message={message} />;
    // }

    return (
        <>
            <ParticipantsInfoContainer />
            <ChatContainer />
        </>
    );
}
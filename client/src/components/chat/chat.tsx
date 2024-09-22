import { Card } from "@components/ui/card";
import { MessageForm } from "@components/ui/form";
import { Messages } from "@contexts/chat-provider";
import { useChat } from "@hooks/useChat";

function OtherUserBox() {
    const { otherUser } = useChat();

    return (
        <Card>
            <p>{otherUser}</p>
        </Card>
    );
}

function CurrentUserBox() {
    const { user } = useChat();

    return (
        <Card>
            <p>{user?.name}</p>
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


function ChatBubble({ message }: { message: Messages }) {
    const { user } = useChat();
    const isCurrentUser = user?.id === message.senderId;

    return (
        <div className={`
            text-white max-w-[70%] py-2 px-3 rounded-xl
      ${isCurrentUser
                ? 'self-end bg-blue-400'
                : 'self-start bg-gray-500'
            }
      `}>
            {message.content}
        </div>
    );
}

function ChatContainer() {
    const { messages } = useChat();

    return (
        <Card className="flex flex-col justify-end gap-4 w-3/5">
            <div className="flex flex-col gap-3 overflow-y-auto">
                {messages?.map(message => (
                    <ChatBubble key={message.sentAt} message={message} />
                ))}
            </div>

            <MessageForm />
        </Card>
    );
}

export function Chat() {
    return (
        <>
            <ParticipantsInfoContainer />
            <ChatContainer />
        </>
    );
}
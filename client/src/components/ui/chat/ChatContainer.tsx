import style from './chat.module.css';
import Card from '../card/Card';
import ChatForm from '../form/ChatForm';
import ChatBubble from './ChatBubble';

const ChatContainer = () => {
    return (
        <Card className={style["chat-container"]}>
            <div className={style.chats}>
                <ChatBubble isUserAuth={true} />
                <ChatBubble isUserAuth={false} />
                <ChatBubble isUserAuth={false} />
                <ChatBubble isUserAuth={true} />
            </div>
            <ChatForm />
        </Card>
    )
}

export default ChatContainer
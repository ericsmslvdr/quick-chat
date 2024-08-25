import style from './chat.module.css';

const ChatBubble = ({ isUserAuth }: { isUserAuth: boolean }) => {
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
  )
}

export default ChatBubble
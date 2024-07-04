import style from './chat.module.css';

type ChatLayout = {
  children: React.ReactNode;
}

const ChatLayout = ({ children }: ChatLayout) => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {children}
      </div>
    </div>
  )
}

export default ChatLayout;
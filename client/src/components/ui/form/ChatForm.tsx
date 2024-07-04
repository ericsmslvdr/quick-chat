import style from './form.module.css';
import Input from '../input/Input'
import Button from '../button/Button'

const ChatForm = () => {
    return (
        <form action="">
            <div className={style["input-group"]}>
                <Input placeholder='Type something nice...' />
                <Button variant='squareWidth' />
            </div>
        </form>
    )
}

export default ChatForm
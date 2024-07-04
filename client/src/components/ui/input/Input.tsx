import style from './input.module.css';

const Input = () => {
    return (
        <input
            type="text"
            placeholder="Type something nice..."
            className={style.input}
        />
    )
}

export default Input
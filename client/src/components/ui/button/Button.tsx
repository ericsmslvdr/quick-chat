import style from './button.module.css';

const Button = () => {
    return (
        <button type='submit' className={style.button}>
            <img
                src="https://img.icons8.com/?size=100&id=85971&format=png&color=FFFFFF"
                alt="Send icon"
                className={style["send-icon"]}
            />
        </button>
    )
}

export default Button
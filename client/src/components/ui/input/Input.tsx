import style from './input.module.css';

type InputProps = {
    placeholder: string;
}

function Input({ placeholder, ...rest }: InputProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={style.input}
            {...rest}
        />
    )
}

export default Input
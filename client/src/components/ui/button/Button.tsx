import style from './button.module.css';

type ButtonProps = {
    className?: string;
    variant?: 'fullWidth' | 'squareWidth';
    children?: string;
}

function Button({ variant, children, ...rest }: ButtonProps) {
    let variantClass = '';

    switch (variant) {
        case 'fullWidth':
            variantClass = style["button--full"];
            break;
        case 'squareWidth':
            variantClass = style["button--square"];
            break;
        default:
            variantClass = '';
    }

    return (
        <button
            type='submit'
            className={`${style.button} ${variantClass}`}
            {...rest}
        >
            {variant === 'squareWidth'
                ? <img
                    src="https://img.icons8.com/?size=100&id=85971&format=png&color=FFFFFF"
                    alt="Send icon"
                    className={style["send-icon"]}
                />
                : children
            }
        </button>
    )
}

export default Button
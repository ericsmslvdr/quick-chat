import { ButtonHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'fullWidth' | 'squareWidth';
    children?: ReactNode;
};

function Button({ variant, children, className, ...rest }: ButtonProps): JSX.Element {
    const variantClass = clsx({
        'w-full': variant === 'fullWidth',
        'w-[52px]': variant === 'squareWidth',
    });

    return (
        <button
            className={twMerge(
                "p-2 border-none h-[42px] bg-gray-900 rounded-lg cursor-pointer text-white shadow-lg",
                "focus:outline focus:outline-2 focus:outline-black focus:outline-opacity-60",
                "hover:bg-gray-700 ease-out duration-300 transition-all",
                variantClass,
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import cn from '@libs/utils';

type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

const buttonVariants = cva("h-[42px] m-auto rounded-lg cursor-pointer shadow-lg ease-out duration-300 transition-all hover:bg-gray-700", {
    variants: {
        variant: {
            default: "w-full grow-1 shrink-1 text-white bg-gray-900",
            squared: "w-[42px] grow-0 shrink-0 text-white bg-gray-900",
            bordered: "w-[42px] grow-0 shrink-0 text-red-500 border-2 border-red-500/50 bg-red-500/20 hover:bg-red-500/50",
            disabled: "w-[42px] grow-0 shrink-0 cursor-not-allowed bg-red-500/60 hover:bg-red-500/60",
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

export function Button({ variant, children, className, ...rest }: ButtonProps): JSX.Element {
    return (
        <button
            className={cn(buttonVariants({ variant, className }))}
            {...rest}
        >
            {children}
        </button>
    );
}
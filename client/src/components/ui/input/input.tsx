import { ChangeEvent, InputHTMLAttributes } from 'react';

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ onChange, className, ...rest }: InputProps) {
    return (
        <input
            className={`w-full h-[42px] border border-solid border-slate-950/20 rounded-lg px-2 text-sm ${className}`}
            onChange={onChange}
            {...rest}
        />
    );
}
import { ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={`border border-slate-500/30 rounded-lg p-2 ${className}`}>
            {children}
        </div>
    );
}
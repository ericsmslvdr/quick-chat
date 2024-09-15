import { ReactNode } from 'react';
import style from './card.module.css';

type CardProps = {
    children: ReactNode;
    className?: string;
}

function Card({ children, className }: CardProps) {
    return (
        <div className={`${style.card} ${className}`}>
            {children}
        </div>
    );
}

export default Card;
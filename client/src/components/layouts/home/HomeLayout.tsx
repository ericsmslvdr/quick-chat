import React from "react";
import style from './home.module.css';

type HomeLayoutProps = {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default HomeLayout;
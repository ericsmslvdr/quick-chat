import { ReactNode } from 'react';
import style from './layout.module.css';

type ContentLayout = {
    children: ReactNode;
}

function ContentLayout({ children }: ContentLayout) {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                {children}
            </div>
        </div>
    );
}

export default ContentLayout;
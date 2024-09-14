import style from './layout.module.css';

type ContentLayout = {
    children: React.ReactNode;
}

function ContentLayout({ children }: ContentLayout) {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                {children}
            </div>
        </div>
    )
}

export default ContentLayout;
import React, { Fragment } from 'react';

type AppProviderProps = {
    children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default AppProvider;
import React from 'react';

type AppProviderProps = {
    children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <>
            {children}
        </>
    )
}

export default AppProvider;
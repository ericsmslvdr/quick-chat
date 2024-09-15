import { ReactNode } from 'react';

type AppProviderProps = {
    children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <>
            {children}
        </>
    );
}

export default AppProvider;
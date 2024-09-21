import { ReactNode } from 'react';

export function ContentLayout({ children }: { children: ReactNode }): JSX.Element {
    return (
        <div className="max-w-screen-md mx-auto h-full flex gap-4 py-4">
            {children}
        </div>
    )
}
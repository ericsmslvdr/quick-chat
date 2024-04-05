import React from 'react'

export const ChatList = ({ children }) => {
    return (
        <div className='border-2 border-green-500 overflow-auto p-4 grow flex flex-col-reverse gap-2'>
            {children}
        </div>
    )
}

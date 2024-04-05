import { useAuth } from '@hooks/useAuth'
import React from 'react'

export const ChatRoom = () => {
    const { user } = useAuth()

    return (
        <div className='container mx-auto'>
            <div>Hello there: {user?.name}</div>
        </div>
    )
}

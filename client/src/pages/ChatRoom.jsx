import { ChatBox } from '@components/chat/ChatBox'
import { ChatList } from '@components/chat/ChatList'
import { useAuth } from '@hooks/useAuth'
import React from 'react'

export const ChatRoom = () => {
    const { user } = useAuth()

    return (
        <div className='container mx-auto'>
            <div className='border-2 border-solid border-red-500 h-screen w-1/2 mx-auto flex flex-col'>
                <div className='border-2 border-solid border-blue-500 p-4'>You are chatting with: {user?.name || "Admin"}</div>
                <ChatList>
                    <ChatBox isMe={false} message={"AhhHH"} />
                    <ChatBox isMe={true} message={"Eyyy"} />
                    <ChatBox isMe={false} message={"Hoy"} />
                    <ChatBox isMe={false} message={"Wassupe?"} />
                    <ChatBox isMe={false} message={"Yooww"} />
                    <ChatBox isMe={true} message={"Hellow?"} />
                </ChatList>
                <div className='flex flex-wrap justify-between'>
                    <div className='border-2 border-red-500 p-2'>End</div>
                    <input type='text' name='message' className='border-2 border-solid border-blue-900 grow p-2' placeholder='Say something nice :)' />
                    <div className='border-2 border-green-500 p-2'>Send</div>
                </div>
            </div>
        </div>
    )
}

import { ChatBox } from '@components/chat/ChatBox'
import { ChatList } from '@components/chat/ChatList'
import { useAuth } from '@hooks/useAuth'
import { useChat } from '@hooks/useChat'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const ChatRoom = () => {
    const { user } = useAuth()
    const { getChatList } = useChat()
    const [chatList, setChatList] = useState([])
    const { chatSessionId } = useParams()

    useEffect(() => {
        const fetchChatList = async () => {
            const chatListData = await getChatList(chatSessionId)
            const chatList = chatListData.data.chats
            setChatList(chatList)
        }
        fetchChatList()
    }, [])


    console.log(chatList);

    return (
        <div className='container mx-auto'>
            <div className='border-2 border-solid border-red-500 h-screen w-1/2 mx-auto flex flex-col'>
                <div className='border-2 border-solid border-blue-500 p-4'>You are chatting with: {user?.name || "Admin"}</div>
                <ChatList>
                    {
                        chatList?.map((chat, index) => (
                            <ChatBox key={index} isMe={chat.sender === user._id} message={chat.message} />
                        ))
                    }
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

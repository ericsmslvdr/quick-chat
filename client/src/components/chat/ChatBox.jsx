import React from 'react'

export const ChatBox = ({ isMe, message }) => {

    return (
        isMe ? <MeBox message={message} /> : <OtherBox message={message} />
    )
}

const MeBox = ({ message }) => {
    return (
        <div className='bg-blue-700 p-2 text-white w-fit self-end rounded-lg'>{message}</div>
    )
}

const OtherBox = ({ message }) => {
    return (
        <div className='bg-slate-800 p-2 text-white w-fit rounded-lg'>{message}</div>
    )
}
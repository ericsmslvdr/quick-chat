import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { useChat } from '@providers/chat-provider';

export function MessageForm() {
    const { leaveChat, startChat, isOtherUserDisconnected, otherUser, user, sendMessage, clearMessages } = useChat();

    const [message, setMessage] = useState('');

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    function handleEndChat() {
        leaveChat();
        window.location.href = '/';
    }

    function handleNextPerson() {
        const currentUserName = user?.name;

        if (!currentUserName) {
            return;
        }

        leaveChat();
        clearMessages();
        startChat(currentUserName);
    }

    function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (message.trim() === "") {
            console.log("Message cannot be empty");
            return;
        }

        sendMessage(message);
        console.log('message sent!');
        setMessage("");
    }

    console.log(message);

    return (
        <form className='w-full' onSubmit={handleOnSubmit}>
            <div className="flex gap-2 w-full">
                <Button variant="bordered" className='text-sm' onClick={handleEndChat} type='button'>End</Button>
                <Button variant="squared" className='text-sm' onClick={handleNextPerson} type='button'>Next</Button>
                <Input
                    type='text'
                    name='message'
                    onChange={handleOnChange}
                    value={message}
                    placeholder={isOtherUserDisconnected ? `${otherUser} has left the chat` : 'Type something nice...'}
                    className={`${isOtherUserDisconnected ? 'border-red-500/60 placeholder-red-500/60' : ''} w-full`}
                    disabled={isOtherUserDisconnected}
                />
                <Button variant={isOtherUserDisconnected ? "disabled" : "squared"} type='submit' disabled={isOtherUserDisconnected}>
                    <img
                        src="https://img.icons8.com/?size=100&id=85971&format=png&color=FFFFFF"
                        alt="Send icon"
                        className="w-[22px] h-[22px] m-auto text-white"
                    />
                </Button>
            </div>
        </form>
    );
}
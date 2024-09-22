import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { useChat } from '@hooks/useChat';

export function MessageForm() {
    const { status, leaveChat, isOtherUserDisconnected, otherUser } = useChat();

    const [message, setMessage] = useState('');

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    function handleEndChat() {
        leaveChat();
        window.location.href = '/';
    }

    function handleNextPerson() {
        console.log('next person clicked!');
    }

    function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('message sent!');
    }

    console.log(message);

    const buttonStyles = status === 'disconnected' ? 'fullWidth' : 'squareWidth';

    return (
        <form className='w-full' onSubmit={handleOnSubmit}>
            <div className="flex gap-2 w-full">
                <Button variant={buttonStyles} className='text-sm' onClick={handleEndChat} type='button'>End</Button>
                <Button variant={buttonStyles} className='text-sm' onClick={handleNextPerson} type='button'>Next</Button>
                <Input
                    type='text'
                    name='message'
                    onChange={handleOnChange}
                    value={message}
                    placeholder={isOtherUserDisconnected ? `${otherUser} has left the chat` : 'Type something nice...'}
                    className={`${isOtherUserDisconnected ? 'border-red-500/60 placeholder-red-500/60' : ''} w-full`}
                    disabled={isOtherUserDisconnected}
                />
                <Button variant='squareWidth' type='submit' disabled={isOtherUserDisconnected} className={isOtherUserDisconnected ? 'cursor-not-allowed bg-red-500/60 hover:bg-red-500/60' : ''}>
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
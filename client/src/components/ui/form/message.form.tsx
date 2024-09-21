import { ChangeEvent, FormEvent, useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { useChat } from '@hooks/useChat';

export function MessageForm() {
    const { } = useChat();

    const [message, setMessage] = useState('');

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    function handleEndChat() {
        // navigate('/');
    }

    function handleNextPerson() {
        console.log('next person clicked!');
    }

    function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('message sent!');
    }

    console.log(message);

    return (
        <form className='w-full' onSubmit={handleOnSubmit}>
            <div className="flex gap-2 w-full">
                <Button variant='squareWidth' className='text-sm' onClick={handleEndChat} type='button'>End</Button>
                <Button variant='squareWidth' className='text-sm' onClick={handleNextPerson} type='button'>Next</Button>
                <Input
                    type='text'
                    name='message'
                    onChange={handleOnChange}
                    value={message}
                    placeholder='Type something nice...'
                    className="w-full"
                />
                <Button variant='squareWidth' type='submit' >
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
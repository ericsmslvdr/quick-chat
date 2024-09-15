import { ChangeEvent, FormEvent, useState } from 'react';
import Input from '@components/ui/input/input';
import Button from '@components/ui/button/Button';
import { useNavigate } from 'react-router-dom';

function MessageForm() {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
    }

    function handleEndConversation() {
        navigate('/');
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
                <Button variant='squareWidth' className='text-sm' onClick={handleEndConversation} type='button'>End</Button>
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

export default MessageForm;
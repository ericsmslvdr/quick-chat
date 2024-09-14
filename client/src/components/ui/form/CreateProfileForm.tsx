import style from './form.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';

function CreateProfileForm() {
    const [name, setName] = useState<string>('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={style["form"]}>
            <div className={`${style["input-group"]} ${style["input-group--column"]}`}>
                <label htmlFor="name">Name:</label>
                <Input placeholder='Enter your display name' />
            </div>
            <Button variant='fullWidth'>Start</Button >
        </form>
    )
}

export default CreateProfileForm
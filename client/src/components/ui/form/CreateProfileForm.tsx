import style from './form.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import { useState } from 'react';

const CreateProfileForm = () => {
    const [name, setName] = useState<string>('')
    const [gender, setGender] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className={style["form"]}>
            <div className={`${style["input-group"]} ${style["input-group--column"]}`}>
                <label htmlFor="name">Name:</label>
                <Input placeholder='Enter your display name' />
            </div>
            <div className={`${style["input-group"]} ${style["input-group--column"]}`}>
                <label>Gender:</label>
                <div className={`${style["input-group"]} ${style["input-group--column"]}`}>
                    <label>
                        <input
                            type="radio"
                            value="male"
                            checked={gender === 'male'}
                            onChange={() => setGender('male')}
                            className={style["input-group_radio"]}
                        />
                        <span className={style["input-group_label"]}>Male</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="female"
                            checked={gender === 'female'}
                            onChange={() => setGender('female')}
                            className={style["input-group_radio"]}
                        />
                        <span className={style["input-group_label"]}>Female</span>
                    </label>
                </div>
            </div>
            <Button variant='fullWidth'>Start</Button >
        </form>
    )
}

export default CreateProfileForm
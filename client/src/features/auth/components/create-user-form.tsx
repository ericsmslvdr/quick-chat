import { ChangeEvent, FormEvent, useState } from "react"
import Button from "@components/ui/button/Button";
import Input from "@components/ui/input/input";
import { useNavigate } from "react-router-dom";

function CreateUserForm(): JSX.Element {
    const navigate = useNavigate();

    const [name, setName] = useState<string>('');

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        navigate('/conversation');
    }

    console.log(name);

    return (
        <form onSubmit={handleSubmit} className="w-[350px] flex flex-col gap-5">
            <div className="flex flex-col gap-2 w-full ">
                <label htmlFor="name">Name:</label>
                <Input
                    type='text'
                    name='name'
                    onChange={handleOnChange}
                    value={name}
                    placeholder='Enter your preferred name...'
                />
            </div>
            <Button variant='fullWidth'>Start</Button >
        </form>
    );
}

export default CreateUserForm;
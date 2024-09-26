import { ChangeEvent, FormEvent, useState } from "react"
import { Input } from "../input";
import { Button } from "../button";
import { useChat } from "@providers/chat-provider";

export function CreateUserForm(): JSX.Element {
    const { startChat } = useChat();
    const [name, setName] = useState<string>("");

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const trimmedName = name.trim();

        if (trimmedName === "") {
            console.log("Name cannot be empty");
            setName("");
            return;
        }

        startChat(trimmedName);
    }

    return (
        <form onSubmit={handleSubmit} className="w-[350px] flex flex-col gap-5">
            <div className="flex flex-col gap-2 w-full ">
                <label htmlFor="name">Name:</label>
                <Input
                    type='text'
                    name='name'
                    onChange={handleOnChange}
                    value={name}
                    required
                    placeholder='Enter your preferred name...'
                />
            </div>
            <Button>Start</Button >
        </form>
    );
}
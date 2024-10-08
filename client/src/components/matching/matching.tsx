import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { useChat } from "@providers/chat-provider";

export function Matching({ message }: { message: string }) {
    const { leaveChat } = useChat();

    function handleCancel() {
        leaveChat();
    }

    return (
        <div className="m-auto grid place-content-center p-4 gap-4">
            <Spinner />
            {message}
            <Button className="w-32" onClick={handleCancel}>Cancel</Button>
        </div>
    );
}
import { Message } from "../message/message.entity";
import { User } from "../user/user.entity";

export class Chat {
    private MAX_USERS: number = 2;
    private messages: Message[] = [];

    constructor(
        private id: string,
        private users: User[],
        private isActive: boolean = true
    ) { }

    addUser(user: User): string {
        if (this.users.length === this.MAX_USERS) {
            this.isActive = false;
            return "Oops, chat room is full!";
        }
        this.users.push(user);
        return `${user.getUserName()} joined the chat!`;
    }

    removeUser(user: User): void {
        this.users = this.users.filter(u => u.getUserId() !== user.getUserId())
    }

    isAvailable(): boolean {
        return this.users.length < this.MAX_USERS && this.isActive;
    }

    getAllUsers(): { [key: string]: unknown } {
        return {
            users: this.users.map(user => user.getUserName()),
            length: this.users.length
        }
    }

    getChatId(): string {
        return this.id;
    }

    addMessage(message: Message): Message {
        this.messages.push(message);
        return message;
    }

    hasUser(user: User): boolean {
        return this.users.some(u => u.getUserId() === user.getUserId());
    }
}
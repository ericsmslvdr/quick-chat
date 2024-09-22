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

    addUser(user: User): void {
        this.users.push(user);

        if (this.users.length === this.MAX_USERS) {
            this.isActive = false;
        }
    }

    removeUser(user: User): void {
        this.users = this.users.filter(u => u.getUserId() !== user.getUserId());
    }

    isAvailable(): boolean {
        return this.users.length < this.MAX_USERS && this.isActive;
    }

    getUsers(): User[] {
        return this.users;
    }

    getChatId(): string {
        return this.id;
    }

    addMessage(message: Message): Message {
        this.messages.push(message);
        return message;
    }

    getMessages(): Message[] {
        return this.messages;
    }

    hasUser(user: User): boolean {
        return this.users.some(u => u.getUserId() === user.getUserId());
    }
}
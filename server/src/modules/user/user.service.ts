import { User } from "./user.entity";

export class UserService {
    private users: User[] = [];

    create(id: string, name: string): User {
        const user = new User(id, name);
        this.users.push(user);
        return user;
    }

    find(id: string): User | undefined {
        return this.users.find(u => u.getUserId() === id);
    }

    remove(id: string): void {
        this.users = this.users.filter(u => u.getUserId() !== id);
    }
}
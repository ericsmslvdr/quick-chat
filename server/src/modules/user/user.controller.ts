import { Response } from "express";
import { User } from "./user.entity";
import { UserService } from "./user.service";

export class UserController {

    constructor(private readonly userService: UserService) { }

    createUser(id: string, name: string): User {
        return this.userService.create(id, name);
    }

    disconnectUser(id: string): void {
        this.userService.remove(id);
    }

    findById(id: string): User | undefined {
        return this.userService.find(id);
    }

    getAllUsers(res: Response): User[] {
        res.json(this.userService.list());
        return this.userService.list();
    }
}
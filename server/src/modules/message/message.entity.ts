import { User } from "../user/user.entity";

export class Message {

    constructor(
        public sender: User,
        public content: string,
        public sendAt: Date
    ) { }
}
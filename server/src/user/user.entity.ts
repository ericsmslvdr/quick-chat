
export class User {

    constructor(
        private id: string,
        private name: string
    ) { }

    getUserId(): string {
        return this.id;
    }

    getUserName(): string {
        return this.name;
    }
}
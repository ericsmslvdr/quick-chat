
export class User {

    constructor(
        public id: number,
        public name: string,
        public socket_id: string,
        public created_at: Date
    ) { }
}
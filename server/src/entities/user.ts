export default class User {
    constructor(
        public readonly name: string,
        public readonly socketId: string,
        public readonly isMatched: boolean,
        public readonly id?: string,
        public readonly created_at?: Date,
        public readonly updated_at?: Date
    ) { }
}
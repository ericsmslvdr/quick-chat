export default class ChatRoom {
    constructor(
        public readonly id: string,
        public readonly participants: string[],
        public readonly messages: string[],
        public readonly created_at: Date,
        public readonly updated_at: Date
    ) { }
}
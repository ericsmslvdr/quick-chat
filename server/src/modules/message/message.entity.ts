
export class Message {

    constructor(
        public id: string,
        public conversationId: string,
        public userId: string,
        public content: string,
        public sentAt: Date
    ) { }
}
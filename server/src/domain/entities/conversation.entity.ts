
export class Conversation {

    constructor(
        public id: number | null,
        public status: 'waiting' | 'ready',
        public participant1Id: string,
        public participant2Id: string | null,
        public createdAt: Date
    ) { }
}
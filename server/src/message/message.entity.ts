
export class Message {
    private id: string;

    constructor(
        private senderId: string,
        private content: string,
        private sentAt: Date
    ) {
        this.id = `m_${Date.now()}`;
    }

    getMessageId(): string {
        return this.id;
    }

    getSenderId(): string {
        return this.senderId;
    }

    getContent(): string {
        return this.content;
    }

    getSendAt(): Date {
        return this.sentAt;
    }
}
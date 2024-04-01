import { Schema, model } from "mongoose"

const chatSessionSchema = Schema({
    participants: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: function (v) {
                return v.length <= 2;
            },
            message: () => `Participants array must not exceed 2 items.`
        }
    }],
    chats: [{
        created_at: { type: Date, default: Date.now },
        message: { type: String, required: true },
        sender_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    }]
}, {
    timestamps: true
})

const ChatSession = model('chat_session', chatSessionSchema)

export { ChatSession }
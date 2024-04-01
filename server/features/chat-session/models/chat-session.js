import mongoose from "mongoose"

const chatSessionSchema = new mongoose.Schema({
    chats: [{
        created_at: { type: Date, default: Date.now },
        message: { type: String, required: true },
        sender_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
    }]
}, {
    timestamps: true
})

const ChatSession = mongoose.model('chat_session', chatSessionSchema)
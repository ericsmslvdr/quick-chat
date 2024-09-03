import { Model, Schema, SchemaTypes } from "mongoose";

const chatRoomSchema = new Schema({
    participants: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }],
    messages: [{
        user_id: {
            type: SchemaTypes.ObjectId,
            ref: 'User'
        },
        message: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

const ChatRoom = new Model('ChatRoom', chatRoomSchema);

export default ChatRoom;
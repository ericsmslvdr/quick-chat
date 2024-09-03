import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
    name: string;
    socket_id: string;
    is_matched: boolean;
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    socket_id: {
        type: String,
        required: true,
        unique: true
    },
    is_matched: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

const UserModel = model<IUser>('User', userSchema);

export default UserModel;
import { Schema, model } from 'mongoose'

const userSchema = Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const User = model('User', userSchema)

export { User }
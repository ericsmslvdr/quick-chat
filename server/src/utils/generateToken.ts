import jwt from 'jsonwebtoken';

const PRIVATE_KEY = process.env.PRIVATE_KEY!;

type User = {
    display_name: string;
    gender: string;
}

export const generateToken = (user: User) => {
    return jwt.sign(user, PRIVATE_KEY, { expiresIn: '3h' })
}
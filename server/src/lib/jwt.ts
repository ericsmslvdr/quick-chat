import jwt from 'jsonwebtoken';
import { User } from '../types/user-types';

const PRIVATE_KEY = process.env.PRIVATE_KEY!;

export function generateToken(user: User) {
    return jwt.sign(user, PRIVATE_KEY, { expiresIn: '1h' });
}
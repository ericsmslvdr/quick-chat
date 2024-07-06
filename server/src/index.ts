import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(cors({
    allowedHeaders: [
        'Content-Type',
    ],
    methods: [
        'GET',
        'POST',
        'PUT',
        'PATCH',
    ],
    origin: [],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// app.use('/api');

const PORT = process.env.PORT!;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
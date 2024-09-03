import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const CONNECTION_STRING = process.env.MONGODB_URI;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING || '');
        console.log("Connected to database");
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

export default connectToDatabase;
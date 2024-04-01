import { connect } from "mongoose";
const URI = process.env.MONGODB_URI

const connection = async () => {
    try {
        await connect(URI)
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error.message);
    }
}

export default connection
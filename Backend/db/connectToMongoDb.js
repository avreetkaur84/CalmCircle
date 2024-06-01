import mongoose from 'mongoose'
import {ApiError} from "../utils/ApiError.js"

const connectDb = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDb");
    } catch (error) {
        throw new ApiError(500, `Error while connecting to MongoDb: ${error.message}`);
    }
}

export default connectDb;
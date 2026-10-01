import mongoose from "mongoose"
import { DB_NAME } from "./constant.js"

const connectDB = async () => {
    try {
        const connectionInstance = mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(`MongoDb is COnnected at !! DB_HOST:  ${connectionInstance.connection.host}`);
        console.log(`MongoDB is connected at !! DB_HOST: ${mongoose.connection.host}`);
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        
    } catch (error) {
        console.log("Mongo DB Connection ERROR",error);
        process.exit(1) //MongoDB connection failed → stop the server. and process.exit(0)✅ Everything is OK
        throw error

        
    }
}
export default connectDB
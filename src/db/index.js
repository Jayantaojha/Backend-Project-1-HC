import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

// Function to establish connection to MongoDB
const connectDB = async () => {
    try {
        // Attempting to connect to MongoDB using mongoose.connect()
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        // Logging successful connection along with the host of the database
        console.log(`\n MongoDB Connected !! | DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        // Handling connection error
        console.log("MongoDB Connection Error ", error);
        // Exiting the process with exit code 1
        process.exit(1);
    }
}

// Exporting the connectDB function as default
export default connectDB;

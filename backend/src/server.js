import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { app } from './app.js';

// Load environment variables
dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAILED: ", error);
        process.exit(1);
    }
};

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Express App Error: ", error);
            throw error;
        });

        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port : ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed !! ", err);
    });

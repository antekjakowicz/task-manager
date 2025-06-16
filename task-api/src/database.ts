import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGODB_URI = process.env.MONGO_URI as string;

const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Połączono z MongoDB");
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error("Błąd połączenia z MongoDB:", err.message);
        } else {
            console.error("Nieznany błąd:", err);
        }
        process.exit(1);
    }
};

export default connectDB;
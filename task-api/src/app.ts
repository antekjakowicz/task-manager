import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server działa na porcie ${PORT}`));
    } catch (e) {
        console.error("Błąd podczas uruchamiania serwera:", e);
        process.exit(1);
    }
})();
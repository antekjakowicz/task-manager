import express, { Request, Response } from "express";
import TaskModel, { Task } from "../models/Task";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
    try {
        const tasks = await TaskModel.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Nie udało się pobrać zadań" });
    }
});

router.post("/", async (req: Request, res: Response) => {
    try {
        const { name, status, priority, group } = req.body;
        const newTask = new TaskModel({ name, status, priority, group });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: "Nie udało się dodać zadania" });
    }
});

export default router;
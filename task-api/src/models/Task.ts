import mongoose, { Document } from "mongoose";

export interface Task extends Document {
    name: string;
    status: string;
    priority: 'low' | 'med' | 'high';
    group: string[];
}

const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    group: { type: [String], required: true },
});

export default mongoose.model<Task>('Task', TaskSchema);
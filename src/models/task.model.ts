import { model, Schema } from 'mongoose';

interface Task {
  title: string;
  description: string;
  completed: boolean;
}

const taskSchema = new Schema<Task>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Task = model<Task>('Task', taskSchema);

export default Task;

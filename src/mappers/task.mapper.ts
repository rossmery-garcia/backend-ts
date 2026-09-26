import type { TaskResponseDto } from '../dtos/task.dtos';

const toTaskResponseDto = (task: {
  _id: unknown;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}): TaskResponseDto => {
  return {
    id: String(task._id),
    title: task.title,
    description: task.description,
    completed: task.completed,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
};

export default toTaskResponseDto;

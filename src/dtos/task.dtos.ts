import type { z } from 'zod';

import type { createTaskSchema, updateTaskSchema } from '../schemas/task.schemas';

export type CreateTaskDto = z.infer<typeof createTaskSchema>;

export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;

export interface TaskResponseDto {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

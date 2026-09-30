import { z } from 'zod';

export const createTaskSchema = z.object({
  title: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Title is required' : 'Title must be a string',
    })
    .trim()
    .min(1, 'Title must not be empty')
    .max(50, 'Title must be at most 50 characters long'),

  description: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Description is required' : 'Description must be a string',
    })
    .trim()
    .min(1, 'Description must not be empty')
    .max(2000, 'Description must be at most 2000 characters long'),
});

export const updateTaskSchema = createTaskSchema
  .partial()
  .extend({
    completed: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: 'At least one field must be provided to update the task',
  });

export const taskIdParamSchema = z.object({
  id: z.string(),
});

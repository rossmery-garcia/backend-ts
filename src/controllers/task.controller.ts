import type { Request, Response } from 'express';

import TaskService from '../services/task.service';

import type { UpdateTaskDto } from '../dtos/task.dtos';

class TaskController {
  async create(req: Request, res: Response) {
    try {
      const newTask = req.body;

      const task = await TaskService.create(req.userId, newTask);

      return res.status(201).json({ data: task });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const tasks = await TaskService.findAll(req.userId);

      return res.status(200).json({ data: tasks });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findById(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;

      const task = await TaskService.findById(req.userId, id);

      if (!task) {
        return res.status(404).json({
          error: {
            code: 'NOT_FOUND',
            message: 'Task not found',
          },
        });
      }

      return res.status(200).json({ data: task });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async update(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;

      const data: UpdateTaskDto = req.body;

      const task = await TaskService.update(req.userId, id, data);

      if (!task) {
        return res.status(404).json({
          error: {
            code: 'NOT_FOUND',
            message: 'Task not found',
          },
        });
      }

      return res.status(200).json({ data: task });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;

      const task = await TaskService.delete(req.userId, id);

      if (!task) {
        return res.status(404).json({
          error: {
            code: 'NOT_FOUND',
            message: 'Task not found',
          },
        });
      }

      return res.status(200).json({ data: task });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default new TaskController();

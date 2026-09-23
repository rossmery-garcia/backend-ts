import type { Request, Response } from 'express';

import TaskService from '../services/task.service';

class TaskController {
  async create(req: Request, res: Response) {
    try {
      const newTask = req.body;

      const task = await TaskService.create(newTask);

      return res.status(201).json({ data: task });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const tasks = await TaskService.findAll();

      return res.status(200).json({ data: tasks });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (typeof id !== 'string') {
        return res.status(400).json({
          error: {
            code: 'INVALID_ID',
            message: 'Task ID is required',
          },
        });
      }

      const task = await TaskService.findById(id);

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

import type { Request, Response } from 'express';

import TaskService from '../services/task.service';

class TaskController {
  async create(req: Request, res: Response) {
    try {
      const newTask = req.body;

      const task = await TaskService.create(newTask);

      res.status(201).json({ data: task });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const tasks = await TaskService.findAll();

      res.status(200).json({ data: tasks });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

export default new TaskController();

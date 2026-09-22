import Task from '../models/task.model';

import type { CreateTaskDto } from '../dtos/task.dtos';

class TaskRepository {
  async create(data: CreateTaskDto) {
    return Task.create(data);
  }

  async findAll() {
    return Task.find();
  }
}

export default new TaskRepository();

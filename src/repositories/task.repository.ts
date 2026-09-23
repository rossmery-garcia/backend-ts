import Task from '../models/task.model';

import type { CreateTaskDto } from '../dtos/task.dtos';

class TaskRepository {
  async create(data: CreateTaskDto) {
    return Task.create(data);
  }

  async findAll() {
    return Task.find();
  }

  async findById(id: string) {
    return Task.findOne({ _id: id });
  }
}

export default new TaskRepository();

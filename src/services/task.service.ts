import TaskRepository from '../repositories/task.repository';

import type { CreateTaskDto } from '../dtos/task.dtos';

class TaskService {
  async create(data: CreateTaskDto) {
    return TaskRepository.create(data);
  }

  async findAll() {
    return await TaskRepository.findAll();
  }

  async findById(id: string) {
    return TaskRepository.findById(id);
  }
}

export default new TaskService();

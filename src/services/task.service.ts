import TaskRepository from '../repositories/task.repository';

import type { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dtos';

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

  async update(id: string, data: UpdateTaskDto) {
    return await TaskRepository.update(id, data);
  }
}

export default new TaskService();

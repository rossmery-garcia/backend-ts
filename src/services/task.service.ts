import TaskRepository from '../repositories/task.repository';

import type { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dtos';

import toTaskResponseDto from '../mappers/task.mapper';

class TaskService {
  async create(userId: string, data: CreateTaskDto) {
    const task = await TaskRepository.create(userId, data);

    return toTaskResponseDto(task);
  }

  async findAll(userId: string) {
    const tasks = await TaskRepository.findAll(userId);

    return tasks.map(toTaskResponseDto);
  }

  async findById(userId: string, taskId: string) {
    const task = await TaskRepository.findById(userId, taskId);

    return task ? toTaskResponseDto(task) : null;
  }

  async update(userId: string, taskId: string, data: UpdateTaskDto) {
    const task = await TaskRepository.update(userId, taskId, data);

    return task ? toTaskResponseDto(task) : null;
  }

  async delete(userId: string, taskId: string) {
    const task = await TaskRepository.delete(userId, taskId);

    return task ? toTaskResponseDto(task) : null;
  }
}

export default new TaskService();

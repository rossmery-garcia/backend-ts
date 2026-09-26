import Task from '../models/task.model';

import type { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dtos';

class TaskRepository {
  async create(userId: string, data: CreateTaskDto) {
    return Task.create({
      userId,
      ...data,
    });
  }

  async findAll(userId: string) {
    return Task.find({ userId });
  }

  async findById(userId: string, taskId: string) {
    return Task.findOne({ _id: taskId, userId });
  }

  async update(userId: string, taskId: string, data: UpdateTaskDto) {
    return Task.findOneAndUpdate(
      { _id: taskId, userId },
      { $set: data },
      { returnDocument: 'after', runValidators: true },
    );
  }

  async delete(userId: string, taskId: string) {
    return Task.findOneAndDelete({ _id: taskId, userId });
  }
}

export default new TaskRepository();

import Task from '../models/task.model';

import type { CreateTaskDto, UpdateTaskDto } from '../dtos/task.dtos';

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

  async update(id: string, data: UpdateTaskDto) {
    return Task.findOneAndUpdate(
      { _id: id },
      { $set: data },
      { returnDocument: 'after', runValidators: true },
    );
  }

  async delete(id: string) {
    return Task.findOneAndDelete({ _id: id });
  }
}

export default new TaskRepository();

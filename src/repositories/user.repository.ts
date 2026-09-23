import User from '../models/user.model';

import type { CreateUserDto } from '../dtos/user.dtos';

class UserRepository {
  async create(data: CreateUserDto) {
    return User.create(data);
  }

  async findByEmail(email: string) {
    return User.findOne({ email });
  }
}

export default new UserRepository();

import UserRepository from '../repositories/user.repository';

import { hashPassword, comparePassword } from '../utils/password';

import type { RegisterUserDto, CreateUserDto, LoginUserDto } from '../dtos/user.dtos';

class AuthService {
  async register(data: RegisterUserDto) {
    const existingUser = await UserRepository.findByEmail(data.email);

    if (existingUser) {
      throw new Error('User already exists');
    }

    const passwordHash = await hashPassword(data.password);

    const userData: CreateUserDto = {
      email: data.email,
      passwordHash,
    };

    return UserRepository.create(userData);
  }

  async login(data: LoginUserDto) {
    const user = await UserRepository.findByEmail(data.email);

    if (!user) {
      return null;
    }

    const isPasswordMatch = await comparePassword(data.password, user.passwordHash);

    if (!isPasswordMatch) {
      return null;
    }

    return user;
  }
}

export default new AuthService();

import UserRepository from '../repositories/user.repository';

import { hashPassword, comparePassword } from '../utils/password';

import JwtService from '../services/jwt.service';

import type { RegisterUserDto, CreateUserDto, LoginUserDto } from '../dtos/user.dtos';
import type { AuthResponseDto } from '../dtos/auth.dtos';

import toUserResponseDto from '../mappers/user.mapper';

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

  async login(data: LoginUserDto): Promise<AuthResponseDto | null> {
    const user = await UserRepository.findByEmail(data.email);

    if (!user) {
      return null;
    }

    const passwordMatch = await comparePassword(data.password, user.passwordHash);

    if (!passwordMatch) {
      return null;
    }

    const accessToken = JwtService.generateAccessToken(user.id);

    const refreshToken = JwtService.generateRefreshToken(user.id);

    const userResponse = toUserResponseDto(user);

    return {
      user: userResponse,
      accessToken,
      refreshToken,
    };
  }
}

export default new AuthService();

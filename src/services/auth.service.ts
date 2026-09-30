import UserRepository from '../repositories/user.repository';

import { hashPassword, comparePassword } from '../utils/password';

import JwtService from '../services/jwt.service';

import type { RegisterUserDto, CreateUserDto, LoginUserDto } from '../dtos/user.dtos';
import type { AuthResponseDto, RefreshResponseDto } from '../dtos/auth.dtos';

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

    const user = await UserRepository.create(userData);

    return toUserResponseDto(user);
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

  async refresh(refreshToken: string): Promise<RefreshResponseDto> {
    const payload = JwtService.verifyRefreshToken(refreshToken);

    const accessToken = JwtService.generateAccessToken(payload.sub);

    const newRefreshToken = JwtService.generateRefreshToken(payload.sub);

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  }
}

export default new AuthService();

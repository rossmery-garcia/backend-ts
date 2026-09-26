import type { UserResponseDto } from './user.dtos';

export interface AuthResponseDto {
  user: UserResponseDto;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenDto {
  refreshToken: string;
}

export interface RefreshResponseDto {
  accessToken: string;
  refreshToken: string;
}

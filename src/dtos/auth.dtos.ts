import type { UserResponseDto } from './user.dtos';

export interface AuthResponseDto {
  user: UserResponseDto;
  accessToken: string;
  refreshToken: string;
}

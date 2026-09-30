import type { z } from 'zod';

import type { refreshTokenSchema } from '../schemas/auth.schemas';

import type { UserResponseDto } from './user.dtos';

export type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;

export interface AuthResponseDto {
  user: UserResponseDto;
  accessToken: string;
  refreshToken: string;
}

export interface RefreshResponseDto {
  accessToken: string;
  refreshToken: string;
}

import type { z } from 'zod';

import type { registerUserSchema, loginUserSchema } from '../schemas/auth.schemas';

export type RegisterUserDto = z.infer<typeof registerUserSchema>;

export type LoginUserDto = z.infer<typeof loginUserSchema>;

export interface CreateUserDto {
  email: string;
  passwordHash: string;
}

export interface UserResponseDto {
  id: string;
  email: string;
}

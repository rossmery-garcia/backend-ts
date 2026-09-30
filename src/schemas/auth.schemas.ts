import { z } from 'zod';

export const registerUserSchema = z.object({
  email: z.email('Email must be a valid email address').trim().toLowerCase(),

  password: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Password is required' : 'Password must be a string',
    })
    .min(8, 'Password must be at least 8 characters long')
    .max(24, 'Password must be at most 24 characters long'),
});

export const loginUserSchema = z.object({
  email: z.email('Email must be a valid email address').trim().toLowerCase(),

  password: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Password is required' : 'Password must be a string',
    })
    .min(1, 'Password must not be empty'),
});

export const refreshTokenSchema = z.object({
  refreshToken: z
    .string({
      error: (issue) =>
        issue.input === undefined ? 'Refresh token is required' : 'Refresh token must be a string',
    })
    .min(1, 'Refresh token must not be empty'),
});

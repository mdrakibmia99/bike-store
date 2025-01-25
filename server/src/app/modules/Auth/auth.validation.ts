import { z } from 'zod';
import { USER_ROLE } from './auth.interface';
const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email must be provided and must be a string',
      })
      .email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({ required_error: 'Refresh token is required' }),
  }),
});

export const authValidation = {
  loginValidationSchema,
  refreshTokenValidationSchema
};
export type TUserRole = keyof typeof USER_ROLE;
import { z } from 'zod';

export const authValidator = z.object({
  email: z.string({ required_error: 'Email is required' }).email(),
  password: z.string({ required_error: 'The password is required' }).min(6).max(20),
})
import { z } from 'zod';

export const updatePasswordSchema = z.object({

  currentPassword: z
  .string({message: "Invalid Input"})
  .regex(/^(?=.*[A-Z])(?=.*\d).*$/, {message: "Password must have one uppercase and digit"})
  .min(8, {message: "Password should be atleast 8 characters"}),

  newPassword: z
  .string({message: "Invalid Input"})
  .regex(/^(?=.*[A-Z])(?=.*\d).*$/, {message: "Password must have one uppercase and digit"})
  .min(8, {message: "Password should be atleast 8 characters"}),

  confirmPassword: z
  .string({message: "Invalid Input"})
  .regex(/^(?=.*[A-Z])(?=.*\d).*$/, {message: "Password must have one uppercase and digit"})
  .min(8, {message: "Password should be atleast 8 characters"})
})
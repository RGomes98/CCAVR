import { z } from 'zod';

const usernameSchema = z
  .string()
  .trim()
  .min(3)
  .max(31)
  .regex(new RegExp(/^[a-z0-9_-]+$/));

const passwordSchema = z
  .string()
  .trim()
  .min(6)
  .max(255)
  .regex(new RegExp(/^[a-z0-9_-]+$/));

export { usernameSchema, passwordSchema };

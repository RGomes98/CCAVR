import { z } from 'zod';

export const reCAPTCHAResponseSchema = z.object({
  success: z.boolean(),
  hostname: z.string(),
  challenge_ts: z.string(),
});

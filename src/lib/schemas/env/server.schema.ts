import { z } from 'zod';

const serverEnvSchema = z.object({
  POSTGRES_USER: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DATABASE: z.string(),
  POSTGRES_URL: z.string().url(),
  POSTGRES_URL_NO_SSL: z.string().url(),
  POSTGRES_PRISMA_URL: z.string().url(),
  POSTGRES_URL_NON_POOLING: z.string().url(),
  BLOB_READ_WRITE_TOKEN: z.string(),
  EMAIL_PASS: z.string(),
  HOST: z.string(),
  MAILER_PORT: z.coerce.number(),
  EMAIL: z.string().email(),
  INSTITUTION_EMAIL: z.string().email(),
  RECAPTCHA_SECRET_KEY: z.string(),
  NODE_ENV: z.enum(['production', 'development', 'test']),
});

export const serverEnv = serverEnvSchema.parse(process.env);

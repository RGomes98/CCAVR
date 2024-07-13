import { reCAPTCHAResponseSchema } from '@/lib/schemas/helpers/recaptcha.schema';
import { serverEnv } from '@/lib/schemas/env/server.schema';

export const validateReCAPTCHA = async (token: string): Promise<boolean> => {
  const validateURL = new URL(
    `/recaptcha/api/siteverify?secret=${serverEnv.RECAPTCHA_SECRET_KEY}&response=${token}`,
    'https://www.google.com'
  );

  try {
    const response = await fetch(validateURL, { method: 'POST' });
    return reCAPTCHAResponseSchema.parse(await response.json()).success;
  } catch (err) {
    throw new Error('Ocorreu algum problema durante a validação do ReCAPTCHA.');
  }
};

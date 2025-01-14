import { reCAPTCHAResponseSchema } from '@/lib/schemas/services/external.schema';
import { serverEnv } from '@/lib/schemas/env/server.schema';

async function validateReCAPTCHA(token: string) {
  try {
    const validateURL = `https://www.google.com/recaptcha/api/siteverify?secret=${serverEnv.RECAPTCHA_SECRET_KEY}&response=${token}`;
    const response = await fetch(validateURL, { method: 'POST' });
    return reCAPTCHAResponseSchema.parse(await response.json()).success;
  } catch (err) {
    throw new Error('Ocorreu algum problema durante a validação do ReCAPTCHA.');
  }
}

export { validateReCAPTCHA };

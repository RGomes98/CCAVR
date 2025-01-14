import { cities } from '@/constants/cities.const';
import { z } from 'zod';

export const contactSchema = z.object({
  reCAPTCHAToken: z.string().trim().min(1, { message: 'ReCAPTCHA token cannot be empty' }),
  name: z.string().trim().min(1, { message: 'Name cannot be empty' }),
  email: z.string().trim().email({ message: 'Invalid email format' }),
  phone: z.string().trim().length(11, { message: 'Phone number must be exactly 11 characters' }),
  city: z.enum(cities, { errorMap: () => ({ message: 'Invalid city' }) }),
  subject: z.enum(['Contato', 'Voluntário'], { errorMap: () => ({ message: 'Invalid subject' }) }),
  content: z.string().trim().min(10, { message: 'Content must have at least 10 characters' }),
});

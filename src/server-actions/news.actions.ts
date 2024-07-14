'use server';

import { newsSchemas } from '@/lib/schemas/server-actions/news.schema';
import { newsData } from '@/data-access/news';
import { dataUtils } from '@/utils/data';
import { ZodError } from 'zod';

export const create = async (formData: FormData) => {
  try {
    return; //disabled server action

    const formDataEntries = Object.fromEntries(formData.entries());
    const images = newsSchemas.files.parse(dataUtils.extractFormDataFiles(formDataEntries));
    const content = newsSchemas.create.parse(formDataEntries);
    await newsData.create(content, images);

    return { errors: { error: null } };
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.flatten().fieldErrors;
      return Object.keys(errors).map((path) => ({ errors: { [path]: errors[path]?.[0] ?? null } }))[0];
    }

    if (error instanceof Error) return { errors: { error: error.message } };
    throw error;
  }
};

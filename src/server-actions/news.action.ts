'use server';

import { createNewsSchema, filesSchema } from '@/lib/schemas/server-actions/news.schema';
import { createNews } from '@/services/news.service';
import { extractFormDataFiles } from '@/utils/form.util';

async function createNewsAction(formData: FormData) {
  try {
    return; //disabled server action
    const formDataEntries = Object.fromEntries(formData.entries());
    const images = filesSchema.parse(extractFormDataFiles(formDataEntries));
    const content = createNewsSchema.parse(formDataEntries);
    await createNews(content, images);
  } catch (error) {
    console.error(error);
  }
}

export { createNewsAction };

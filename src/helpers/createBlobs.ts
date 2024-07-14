import { put } from '@vercel/blob';

export const createBlobs = (files: File[]) => {
  return Promise.all(
    Array.from(files).map(async (file) => {
      const name = `${crypto.randomUUID()}-${file.name}`;
      return { url: (await put(name, file, { access: 'public' })).url };
    })
  );
};

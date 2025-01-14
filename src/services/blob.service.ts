import { put } from '@vercel/blob';

function createBlobs(files: File[]) {
  try {
    return Promise.all(
      Array.from(files).map(async (file) => {
        const name = `${crypto.randomUUID()}-${file.name}`;
        return { url: (await put(name, file, { access: 'public' })).url };
      })
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { createBlobs };

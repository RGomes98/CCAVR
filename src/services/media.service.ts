import { mimeTypesSchema } from '@/lib/schemas/services/media.schema';

type GetMediaType = {
  id: number;
  url: string;
  newsId: number;
};

async function getMediaType({ id, url, newsId }: GetMediaType) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentType = mimeTypesSchema.parse(response.headers.get('content-type'));
    return { id, url, newsId, contentType };
  } catch (error) {
    console.error(`Error fetching URL: ${url}`, error);
    return { id, url, newsId, contentType: null };
  }
}

export { getMediaType };

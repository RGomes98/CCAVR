import { serverEnv } from '@/lib/schemas/env/server.schema';

export function getBlobFileURL(fileName: string) {
  const baseURL = `https://${serverEnv.BLOB_STORE_ID}.public.blob.vercel-storage.com`;
  return new URL(fileName, baseURL);
}

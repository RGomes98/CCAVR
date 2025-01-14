import { z } from 'zod';

const mimeTypes = ['image/webp', 'video/mp4'] as const;

export const mimeTypesSchema = z.enum(mimeTypes);
export type MimeTypes = z.infer<typeof mimeTypesSchema>;

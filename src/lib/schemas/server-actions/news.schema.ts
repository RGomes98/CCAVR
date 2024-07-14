import { z } from 'zod';

const create = z.object({
  title: z.string().trim().min(5, { message: 'O título precisa ter no mínimo 5 caracteres.' }),
  content: z.string().trim().min(10, 'O conteúdo precisa ter no mínimo 10 caracteres.'),
  publishedAt: z.coerce.date({ errorMap: () => ({ message: 'Formato de data inválido.' }) }),
});

const files = z.array(z.instanceof(File)).superRefine((files, refinementContext) => {
  const MAX_FILE_SIZE_MB = 4.5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * (1024 * 1024);
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  const hasInvalidFileTypes = files.some((file) => !ACCEPTED_IMAGE_TYPES.includes(file.type));
  const hasOversizedFiles = files.some((file) => file.size > MAX_FILE_SIZE_BYTES);
  const hasNoFiles = files.length === 0;

  if (hasNoFiles) {
    refinementContext.addIssue({
      path: ['files'],
      code: z.ZodIssueCode.custom,
      message: 'Pelo menos uma imagem deve ser adicionada.',
    });
  }

  if (hasOversizedFiles) {
    refinementContext.addIssue({
      path: ['files'],
      code: z.ZodIssueCode.custom,
      message: `O tamanho máximo permitido para cada imagem é 4.5 MB.`,
    });
  }

  if (hasInvalidFileTypes) {
    refinementContext.addIssue({
      path: ['files'],
      code: z.ZodIssueCode.custom,
      message: 'Formato de arquivo não suportado. Os formatos aceitos são: JPEG, JPG, PNG e WEBP.',
    });
  }
});

export const newsSchemas = { create, files };

export type CreateSchema = z.infer<typeof create>;
export type FileSchema = z.infer<typeof files>;

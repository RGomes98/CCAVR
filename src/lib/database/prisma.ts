import { serverEnv } from '../schemas/env/server.schema';
import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient({ datasourceUrl: serverEnv.POSTGRES_PRISMA_URL });

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (serverEnv.NODE_ENV !== 'production') globalThis.prisma = prisma;

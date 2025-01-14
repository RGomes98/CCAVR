import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { prisma } from '@/lib/database/prisma';
import { serverEnv } from '../schemas/env/server.schema';

const prismaAdapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(prismaAdapter, {
  getUserAttributes: (attributes) => ({ username: attributes.username }),
  sessionCookie: { expires: false, attributes: { secure: serverEnv.NODE_ENV === 'production' } },
});

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
}

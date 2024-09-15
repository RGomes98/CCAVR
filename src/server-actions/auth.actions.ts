'use server';

import { passwordSchema, usernameSchema } from '@/lib/schemas/server-actions/auth.schema';
import { verify } from '@node-rs/argon2';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/database/prisma';
import { lucia } from '@/lib/auth/lucia';

async function login(formData: FormData) {
  const username = usernameSchema.safeParse(formData.get('username'));
  const password = passwordSchema.safeParse(formData.get('password'));

  if (!username.success) return { error: 'Invalid username' };
  if (!password.success) return { error: 'Invalid password' };

  const user = await prisma.user.findFirst({ where: { username: username.data } });
  if (!user) return { error: 'Incorrect username or password' };

  const isPasswordInvalid = !(await verify(user.password_hash, password.data, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  }));

  if (isPasswordInvalid) return { error: 'Incorrect username or password' };

  const session = await lucia.createSession(user.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return redirect('/');
}

export { login };

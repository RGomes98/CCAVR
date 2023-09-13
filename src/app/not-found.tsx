'use client';

import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();
  redirect('/');
}

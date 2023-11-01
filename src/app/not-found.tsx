'use client';

import { isRedirectError } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

export default function NotFound() {
  try {
    redirect('/');
  } catch (error) {
    if (isRedirectError(error)) throw error;
  }
}

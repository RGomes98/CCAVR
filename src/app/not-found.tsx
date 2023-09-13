'use client';
import { redirect } from 'next/navigation';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  // console.log('hi');
  const router = useRouter();
  router.push('/');
  // return redirect('/');
}

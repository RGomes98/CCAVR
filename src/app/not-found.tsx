'use client';

import { redirect } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    redirect('/');
  }, []);

  return <></>;
}

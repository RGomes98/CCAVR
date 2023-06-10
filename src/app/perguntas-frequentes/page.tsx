'use client';

import { useEffect } from 'react';

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <h1>FAQ</h1>;
}

'use client';

import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';

export const ScrollReset = () => {
  const pathname = usePathname();

  useEffect(() => {
    const isHeadingToContact = window.location.href.includes('#contact');
    if (isHeadingToContact) return;

    window.scroll(0, 0);
  }, [pathname]);

  return <Fragment />;
};

'use client';

import { usePathname } from 'next/navigation';
import { Fragment, useEffect } from 'react';

export const ScrollReset = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return <Fragment />;
};

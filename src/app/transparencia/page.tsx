'use client';

import { Description } from '@/components/TransparencyComponents/Description';
import { Accounting } from '@/components/TransparencyComponents/Accounting';
import { Fragment, useEffect } from 'react';

export default function Transparency() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Description />
      <Accounting />
    </Fragment>
  );
}

'use client';

import { Description } from '@/components/CurumimComponents/Description';
import { Program } from '@/components/CurumimComponents/Program';
import { Fragment, useEffect } from 'react';

export default function Curumim() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Description />
      <Program />
    </Fragment>
  );
}

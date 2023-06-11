'use client';

import { Description } from '@/components/FAQComponents/Description';
import { Questions } from '@/components/FAQComponents/Questions';
import { Fragment, useEffect } from 'react';

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Description />
      <Questions />
    </Fragment>
  );
}

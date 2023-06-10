'use client';

import { Description } from '@/components/TestimonialsComponents/Description';
import { Testimonial } from '@/components/TestimonialsComponents/Testimonial';
import { Fragment, useEffect } from 'react';

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Description />
      <Testimonial />
    </Fragment>
  );
}

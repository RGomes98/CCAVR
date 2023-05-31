'use client';

import { Description } from '../components/HomeComponents/Description';
import { Projects } from '../components/HomeComponents/Projects';
import { Partners } from '../components/HomeComponents/Partners';
import { Mission } from '../components/HomeComponents/Mission';
import { Contact } from '../components/HomeComponents/Contact';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Description />
      <Mission />
      <Projects />
      <Partners />
      <Contact />
    </Fragment>
  );
}

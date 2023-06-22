import { Description } from '@/components/TransparencyComponents/Description';
import { Accounting } from '@/components/TransparencyComponents/Accounting';
import { Fragment } from 'react';

export default function Transparency() {
  return (
    <Fragment>
      <Description />
      <Accounting />
    </Fragment>
  );
}

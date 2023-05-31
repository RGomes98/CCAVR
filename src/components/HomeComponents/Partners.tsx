import { partnerLogo } from '../../data/partnerLogo';

import styles from '../../stylesheets/components/HomeComponentsStyles/Partners.module.scss';
import Image from 'next/image';

export const Partners: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Nossos Parceiros</h2>
      <div className={styles.wrapper}>
        {partnerLogo.map((logoPartner, idx) => {
          return (
            <Image
              key={idx}
              className={styles.logo}
              src={logoPartner}
              alt={'partner-logo'}
              width={1000}
              height={1000}
            />
          );
        })}
      </div>
    </div>
  );
};

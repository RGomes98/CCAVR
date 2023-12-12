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
              width={240}
              height={240}
              sizes='384px'
              src={logoPartner}
              alt='partner-logo'
              className={styles.logo}
            />
          );
        })}
      </div>
    </div>
  );
};

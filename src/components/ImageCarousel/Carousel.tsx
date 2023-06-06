'use client';

import { useImageCarousel } from '../../hooks/useImageCarousel';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

import styles from '../../stylesheets/components/ImageCarouselStyles/Carousel.module.scss';
import Image from 'next/image';

export const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  useImageCarousel(carouselRef, 5000);
  const pathname = usePathname();

  const isAtCurumim = pathname === '/curumim';

  return (
    <div ref={carouselRef} className={styles.imageCarousel}>
      {isAtCurumim ? (
        <Image
          width={384}
          height={384}
          alt='logo-curumim'
          className={styles.logo}
          src='/logos/svgs/institution/logoCurumim.svg'
        />
      ) : (
        <Image
          width={384}
          height={384}
          alt='logo-cca'
          className={styles.logo}
          src='/logos/svgs/institution/logoCCA.svg'
        />
      )}
      <span className={styles.cloud} />
    </div>
  );
};

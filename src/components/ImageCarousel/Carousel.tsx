'use client';

import { useImageCarousel } from '../../hooks/useImageCarousel';
import { carouselContent } from '@/data/carouselContent';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Nunito } from 'next/font/google';
import { Waves } from '../SVGs/Waves';

import styles from '../../stylesheets/components/ImageCarouselStyles/Carousel.module.scss';
import Image from 'next/image';

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Carousel: React.FC = () => {
  const { imageIndex } = useImageCarousel(carouselContent, 8000);
  const { isSmallerThanLimit } = useWindowSize(815);

  return (
    <div className={styles.imageCarousel}>
      <div className={styles.imageWrapper}>
        {carouselContent.map((image, idx) => {
          const isCurrentImage = imageIndex === idx;

          return (
            <Image
              key={idx}
              src={image}
              width={1920}
              height={1080}
              priority={true}
              alt='carousel-image'
              className={`${styles.image} ${isCurrentImage ? styles.showImage : styles.hideImage}`}
            />
          );
        })}
      </div>
      <div className={`${styles.headingWrapper} ${nunito.className}`}>
        <p className={styles.headingTextWrapper}>
          <span className={styles.headingText}>Casa da Criança e</span>
          <span className={styles.headingText}>do Adolescente</span>
        </p>
        <p className={styles.textWrapper}>
          <span className={styles.text}>
            Cuidando e Protegendo o {!isSmallerThanLimit && 'Nosso Futuro Comum!'}
          </span>
          {isSmallerThanLimit && <span className={styles.text}>Nosso Futuro Comum!</span>}
        </p>
      </div>
      <Waves />
    </div>
  );
};

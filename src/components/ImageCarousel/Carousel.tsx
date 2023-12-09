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
        <Image
          quality={1}
          width={1920}
          height={1080}
          sizes={'16px'}
          priority={false}
          alt='carousel-resizer'
          src={carouselContent[0]}
          className={styles.imageWrapperResizer}
        />
        {carouselContent.map((image, idx) => {
          const isCurrentImage = imageIndex === idx;
          const isFirstImage = idx === 0;

          return (
            <Image
              key={idx}
              src={image}
              quality={85}
              width={1920}
              height={1080}
              alt='carousel-image'
              priority={isFirstImage ? true : false}
              sizes={'(max-width: 475px) 1080px, (max-width: 1024px) 1200px, 1920px'}
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

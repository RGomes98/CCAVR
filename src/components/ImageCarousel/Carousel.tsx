'use client';

import { useImageCarousel } from '../../hooks/useImageCarousel';
import { carouselContent } from '@/data/carouselContent';
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
              quality={100}
              height={1080}
              priority={true}
              alt='carousel-image'
              className={`${styles.image} ${isCurrentImage ? styles.showImage : styles.hideImage}`}
            />
          );
        })}
      </div>
      <div className={`${styles.headingWrapper} ${nunito.className}`}>
        <h1 className={styles.heading}>Casa da Criança e do Adolescente</h1>
        <p>
          <span className={styles.text}>Cuidando e Protegendo o Nosso Futuro Comum!</span>
        </p>
      </div>
      <Waves />
    </div>
  );
};

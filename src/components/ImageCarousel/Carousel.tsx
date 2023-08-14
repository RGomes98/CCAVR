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
      {carouselContent.map((image, idx) => {
        const isCurrentImage = imageIndex === idx;

        return (
          <Image
            key={idx}
            src={image}
            width={1920}
            height={1080}
            quality={100}
            sizes='100vw'
            alt='carousel-image'
            priority={idx === 0 ? true : false}
            className={`${styles.image} ${isCurrentImage ? styles.showImage : styles.hideImage}`}
          />
        );
      })}
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

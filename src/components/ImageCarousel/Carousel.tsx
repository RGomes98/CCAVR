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
            fill
            quality={100}
            // width={5184}
            // height={3456}
            alt='carousel-image'
            className={`${styles.image} ${isCurrentImage ? styles.showImage : styles.hideImage}`}
          />
        );
      })}
      <div className={`${styles.headingWrapper} ${nunito.className}`}>
        <h1 className={styles.heading}>Juntos, Construiremos um Mundo Melhor!</h1>
        <p>
          <span className={styles.text}>
            Junte-se a nós na missão de transformar vidas e construir um futuro melhor para nossas
            crianças, adolescentes e jovens!
          </span>
        </p>
      </div>
      <Waves />
    </div>
  );
};

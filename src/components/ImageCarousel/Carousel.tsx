'use client';

import { useImageCarousel } from '../../hooks/useImageCarousel';
import { Nunito } from 'next/font/google';
import { Waves } from '../SVGs/Waves';
import { useRef } from 'react';

import styles from '../../stylesheets/components/ImageCarouselStyles/Carousel.module.scss';
const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  useImageCarousel(carouselRef, 8000);

  return (
    <div ref={carouselRef} className={styles.imageCarousel}>
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

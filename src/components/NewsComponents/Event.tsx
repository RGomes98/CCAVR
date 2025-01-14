'use client';

import { NavigateNext as LogoNavigate } from '../SVGs/NavigateNext';
import { Description } from '../HomeComponents/Description';
import { useState } from 'react';
import { getNewsById } from '@/services/news.service';

import styles from '../../stylesheets/components/NewsComponentsStyles/Event.module.scss';
import Image from 'next/image';

export const Event: React.FC<{
  title: string;
  content: string;
  images: Awaited<ReturnType<typeof getNewsById>>['media'];
}> = ({ title, content, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isEventImagesLessThanTwo = images.length < 2;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLButtonElement;
    const lastImageIndex = images.length - 1;

    const buttonCase: { [index: string]: () => void } = {
      next: () => setCurrentImageIndex((prev) => (prev === lastImageIndex ? 0 : prev + 1)),
      previous: () => setCurrentImageIndex((prev) => (prev === 0 ? lastImageIndex : prev - 1)),
    };

    buttonCase[id]();
  };

  return (
    <div className={styles.container}>
      <Description heading={title} text={content} mobileHeading />
      <span className={styles.eventHeading}>Galeria de Mídia</span>
      <div className={styles.eventImagesWrapper}>
        {images.map(({ url, contentType }, index) => {
          if (!contentType) return null;

          const isImageSelected = currentImageIndex === index;

          return contentType === 'video/mp4' ? (
            <video className={styles.video} preload='metadata' key={index} controls>
              <source src={url} type='video/mp4' />
            </video>
          ) : (
            <Image
              src={url}
              alt={url}
              key={index}
              width={1000}
              height={800}
              quality={100}
              className={`${styles.eventImage} ${!isImageSelected ? styles.invisible : ''}`}
            />
          );
        })}
        <button id='previous' onClick={handleClick} className={styles.previousButton}>
          {!isEventImagesLessThanTwo && <LogoNavigate />}
        </button>
        <button id='next' onClick={handleClick} className={styles.nextButton}>
          {!isEventImagesLessThanTwo && <LogoNavigate />}
        </button>
      </div>
    </div>
  );
};

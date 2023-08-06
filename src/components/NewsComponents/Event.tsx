'use client';

import { NavigateNext as LogoNavigate } from '../SVGs/NavigateNext';
import { Description } from '../HomeComponents/Description';
import { useState } from 'react';

import styles from '../../stylesheets/components/NewsComponentsStyles/Event.module.scss';
import Image from 'next/image';

export const Event: React.FC<{
  eventTitle: string;
  eventText: string;
  eventImages: string[];
}> = ({ eventTitle, eventText, eventImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLButtonElement;
    const lastImageIndex = eventImages.length - 1;

    const buttonCase: { [index: string]: () => void } = {
      next: () => setCurrentImageIndex((prev) => (prev === lastImageIndex ? 0 : prev + 1)),
      previous: () => setCurrentImageIndex((prev) => (prev === 0 ? lastImageIndex : prev - 1)),
    };

    buttonCase[id]();
  };

  return (
    <div className={styles.container}>
      <Description heading={eventTitle} text={eventText} />
      <span className={styles.eventHeading}>Galeria de Fotos</span>
      <div className={styles.eventImagesWrapper}>
        {eventImages.map((url, idx) => {
          const isImageSelected = currentImageIndex === idx;

          return (
            <Image
              src={url}
              alt={url}
              key={idx}
              width={1000}
              height={800}
              // quality={100}
              className={`${styles.eventImage} ${!isImageSelected ? styles.invisible : ''}`}
            />
          );
        })}
        <button id='previous' onClick={handleClick} className={styles.previousButton}>
          <LogoNavigate />
        </button>
        <button id='next' onClick={handleClick} className={styles.nextButton}>
          <LogoNavigate />
        </button>
      </div>
    </div>
  );
};

import { NavigateNext as LogoNavigate } from '../SVGs/NavigateNext';
import { curumimContent } from '@/data/curumimContent';
import { Close as LogoClose } from '../SVGs/Close';
import { useModal } from '@/hooks/useModal';
import { useRef, useState } from 'react';

import styles from '../../stylesheets/components/CurumimModalStyles/Curumim.module.scss';
import Image from 'next/image';

export const Curumim: React.FC = () => {
  const [isModalStateOpen, setIsModalStateOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const dialogRef = useRef<HTMLDialogElement>(null);
  const { modalRef } = useModal(dialogRef, isModalStateOpen);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.target as HTMLButtonElement;
    const lastImageIndex = curumimContent.length - 1;

    const buttonCase: { [index: string]: () => void } = {
      next: () => setSelectedImage((prev) => (prev === lastImageIndex ? 0 : prev + 1)),
      previous: () => setSelectedImage((prev) => (prev === 0 ? lastImageIndex : prev - 1)),
    };

    buttonCase[id]();
  };

  return (
    <div className={styles.container}>
      {isModalStateOpen && (
        <dialog ref={modalRef} className={styles.modal}>
          {curumimContent.map((image, idx) => {
            const isImageSelected = selectedImage === idx;
            const selectedImageStyles = isImageSelected ? styles.showImage : styles.hideImage;

            return (
              <Image
                key={idx}
                src={image}
                width={1200}
                height={1200}
                alt='curumim-image'
                className={`${styles.modalImage} ${selectedImageStyles}`}
              />
            );
          })}
          <button id='previous' onClick={handleClick} className={styles.previousButton}>
            <LogoNavigate />
          </button>
          <button id='next' onClick={handleClick} className={styles.nextButton}>
            <LogoNavigate />
          </button>
          <button onClick={() => setIsModalStateOpen(false)} className={styles.closeButton}>
            <LogoClose />
          </button>
        </dialog>
      )}
      {curumimContent.map((image, idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              setSelectedImage(idx);
              setIsModalStateOpen(true);
            }}
            className={styles.showModalButton}
          >
            <Image
              src={image}
              width={800}
              height={800}
              alt='curumim-image'
              className={styles.buttonImage}
            />
          </button>
        );
      })}
    </div>
  );
};

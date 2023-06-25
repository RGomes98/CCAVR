import { NavigateNext as LogoNavigate } from '../SVGs/NavigateNext';
import { AddCircle, AddCircle as LogoAddCircle } from '../SVGs/AddCircle';
import { curumimContent } from '@/data/curumimContent';
import { Close as LogoClose } from '../SVGs/Close';
import { useModal } from '@/hooks/useModal';
import { useRef, useState } from 'react';

import styles from '../../stylesheets/components/CurumimModalStyles/CurumimModal.module.scss';
import Image from 'next/image';

export const CurumimModal: React.FC = () => {
  const [isModalStateOpen, setIsModalStateOpen] = useState(false);
  const [imageGallerySlice, setImageGallerySlice] = useState(5);
  const [selectedImage, setSelectedImage] = useState(0);

  const isNotAtLastGalleryImage = imageGallerySlice !== curumimContent.length;

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
                width={5184}
                height={3456}
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
      {curumimContent.slice(0, imageGallerySlice).map((image, idx) => {
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
      {isNotAtLastGalleryImage && (
        <button
          className={styles.loadMoreButton}
          onClick={() =>
            setImageGallerySlice((prev) => {
              const isFinalSlice = prev === curumimContent.length - 4;
              return isFinalSlice ? prev + 4 : prev + 3;
            })
          }
        >
          <div className={styles.loadMoreWrapper}>
            <AddCircle />
            <span className={styles.loadMoreText}>Carregar Mais</span>
          </div>
        </button>
      )}
    </div>
  );
};

'use client';

import { Fragment, useRef, useState } from 'react';
import { Close as LogoClose } from '../SVGs/Close';
import { useModal } from '../../hooks/useModal.hook';

import styles from '../../stylesheets/components/ProjectModalStyles/Project.module.scss';

export const Project: React.FC<{ name: string; description: string; projectStyle: string }> = ({
  name,
  description,
  projectStyle,
}) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { modalRef } = useModal(dialogRef, isProjectModalOpen, setIsProjectModalOpen);

  return (
    <Fragment>
      <button className={projectStyle} onClick={() => setIsProjectModalOpen(true)}>
        <span className={styles.text}>{name}</span>
      </button>
      {isProjectModalOpen && (
        <dialog className={styles.modal} ref={modalRef}>
          <h2 className={styles.heading}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.closeButton} onClick={() => setIsProjectModalOpen(false)}>
            <LogoClose />
          </button>
        </dialog>
      )}
    </Fragment>
  );
};

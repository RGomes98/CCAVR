import { Close as LogoClose } from '../SVGs/Close';
import { useModal } from '../../hooks/useModal';
import { useStore } from '../../store/store';
import { useRef } from 'react';

import styles from '../../stylesheets/components/DonateModalStyles/Donate.module.scss';
import Image from 'next/image';

export const Donate: React.FC = () => {
  const isDonateModalOpen = useStore((state) => state.isDonateModalOpen);
  const toggleDonateModal = useStore((state) => state.toggleDonateModal);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { modalRef } = useModal(dialogRef, isDonateModalOpen);

  return (
    <dialog ref={modalRef} className={styles.modal}>
      <div className={styles.primaryWrapper}>
        <h2 className={styles.primaryHeading}>Faça parte dessa Casa!</h2>
        <p className={styles.primaryText}>
          Juntos podemos fazer a diferença! Faça sua doação à Casa da Criança e do Adolescente e
          ajude a construir um mundo mais justo para nossas crianças e adolescentes.
        </p>
        <div className={styles.donateDetailsWrapper}>
          <p className={styles.detailsHeading}>Doações via conta corrente</p>
          <div className={styles.firstDetailsWrapper}>
            <span className={styles.boldText}>Banco do Brasil</span>
            <p className={styles.text}>
              <span className={styles.boldText}>Agência: </span>2922-X
            </p>
            <p className={styles.text}>
              <span className={styles.boldText}>Conta Corrente: </span>13.995-5
            </p>
          </div>
          <div className={styles.secondDetailsWrapper}>
            <span className={styles.boldText}>Sicredi 748</span>
            <p className={styles.text}>
              <span className={styles.boldText}>Agência: </span>710
            </p>
            <p className={styles.text}>
              <span className={styles.boldText}>Conta Corrente: </span>16847-4
            </p>
          </div>
        </div>
      </div>
      <div className={styles.secondaryWrapper}>
        <h2 className={styles.secondaryHeading}>Doe usando PIX</h2>
        <Image
          className={styles.qrCode}
          src='/logos/donation/QRCode.png'
          alt='qr-code'
          width={285}
          height={285}
        />
        <span className={styles.boldText}>Chave PIX: (24) 98839-7130</span>
      </div>
      <button className={styles.closeButton} onClick={toggleDonateModal}>
        <LogoClose />
      </button>
    </dialog>
  );
};

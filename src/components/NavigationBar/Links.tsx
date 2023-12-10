import { Instagram as LogoInstagram } from '../../components/SVGs/Instagram';
import { Facebook as LogoFacebook } from '../../components/SVGs/Facebook';
import { Youtube as LogoYoutube } from '../../components/SVGs/Youtube';
import { Donate } from '../DonateModal/Donate';
import { usePathname } from 'next/navigation';
import { useStore } from '../../store/store';
import { Fragment } from 'react';

import styles from '../../stylesheets/components/NavigationBarStyles/Links.module.scss';
import Link from 'next/link';

export const Links: React.FC = () => {
  const isDonateModalOpen = useStore((state) => state.isDonateModalOpen);
  const toggleDonateModal = useStore((state) => state.toggleDonateModal);
  const closeHiddenMenu = useStore((state) => state.closeHiddenMenu);
  const pathname = usePathname();

  const isAtTransparency = pathname === '/transparencia';
  const isAtTestimonials = pathname === '/depoimentos';
  const isAtFAQ = pathname === '/perguntas-frequentes';
  const isAtNews = pathname === '/noticias';
  const isAtHome = pathname === '/';

  return (
    <Fragment>
      <ul className={`${styles.navWrapper} ${styles.home}`}>
        {!isAtHome && (
          <li className={styles.navItem}>
            <Link onClick={() => closeHiddenMenu()} className={styles.navLink} href='/'>
              Início
            </Link>
          </li>
        )}
        {!isAtFAQ && (
          <li className={styles.navItem}>
            <Link
              onClick={() => closeHiddenMenu()}
              className={styles.navLink}
              href='/perguntas-frequentes'
            >
              FAQ
            </Link>
          </li>
        )}
        {!isAtNews && (
          <li className={styles.navItem}>
            <Link onClick={() => closeHiddenMenu()} href='/noticias' className={styles.navLink}>
              Notícias
            </Link>
          </li>
        )}
        {!isAtTestimonials && (
          <li className={styles.navItem}>
            <Link onClick={() => closeHiddenMenu()} className={styles.navLink} href='/depoimentos'>
              Depoimentos
            </Link>
          </li>
        )}
        {!isAtTransparency && (
          <li className={styles.navItem}>
            <Link
              onClick={() => closeHiddenMenu()}
              className={styles.navLink}
              href='/transparencia'
            >
              Transparência
            </Link>
          </li>
        )}
        <li className={styles.navItem}>
          <Link onClick={() => closeHiddenMenu()} className={styles.navLink} href='/#contact'>
            Contato
          </Link>
        </li>
      </ul>
      <div className={`${styles.secondaryWrapper} ${styles.home}`}>
        <div className={styles.socialWrapper}>
          <a
            aria-label='facebook'
            className={styles.socialLink}
            href='https://www.facebook.com/CasadaCriancaedoAdolescenteOficial/'
          >
            <LogoFacebook />
            <LogoFacebook />
          </a>
          <a
            aria-label='instagram'
            className={styles.socialLink}
            href='https://www.instagram.com/casadacriancaedoadolescente/'
          >
            <LogoInstagram />
            <LogoInstagram />
          </a>
          <a
            aria-label='youtube'
            className={styles.socialLink}
            href='https://www.youtube.com/@casadacriancaedoadolescent351'
          >
            <LogoYoutube />
            <LogoYoutube />
          </a>
        </div>
        <button onClick={toggleDonateModal} className={styles.donateButton}>
          DOE AGORA
          <svg viewBox='0 0 180 60'>
            <polyline points='179,1 179,59 1,59 1,1 179,1' />
            <polyline points='179,1 179,59 1,59 1,1 179,1' />
          </svg>
        </button>
        {isDonateModalOpen && <Donate />}
      </div>
    </Fragment>
  );
};

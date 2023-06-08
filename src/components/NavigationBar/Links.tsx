import { Instagram as LogoInstagram } from '../../components/SVGs/Instagram';
import { Facebook as LogoFacebook } from '../../components/SVGs/Facebook';
import { Youtube as LogoYoutube } from '../../components/SVGs/Youtube';
import { Donate } from '../DonateModal/Donate';
import { usePathname } from 'next/navigation';
import { useStore } from '../../store/store';
import { Fragment } from 'react';

import styles from '../../stylesheets/components/NavigationBarStyles/Links.module.scss';

export const Links: React.FC = () => {
  const isDonateModalOpen = useStore((state) => state.isDonateModalOpen);
  const toggleDonateModal = useStore((state) => state.toggleDonateModal);
  const closeHiddenMenu = useStore((state) => state.closeHiddenMenu);
  const pathname = usePathname();

  const isAtTransparency = pathname === '/transparencia';
  const isAtTestimonials = pathname === '/depoimentos';
  const isAtFAQ = pathname === '/perguntas-frequentes';
  const isAtCurumim = pathname === '/curumim';
  const isAtHome = pathname === '/';

  const linkStyles = isAtCurumim ? styles.curumim : styles.home;

  return (
    <Fragment>
      <ul className={`${styles.navWrapper} ${linkStyles}`}>
        {!isAtHome && (
          <li className={styles.navItem}>
            <a onClick={() => closeHiddenMenu()} className={styles.navLink} href='/'>
              Início
            </a>
          </li>
        )}
        {!isAtFAQ && (
          <li className={styles.navItem}>
            <a
              onClick={() => closeHiddenMenu()}
              className={styles.navLink}
              href='/perguntas-frequentes'
            >
              FAQ
            </a>
          </li>
        )}
        <li className={styles.navItem}>
          <a onClick={() => closeHiddenMenu()} href='/#project' className={styles.navLink}>
            Projetos
          </a>
        </li>
        {!isAtTestimonials && (
          <li className={styles.navItem}>
            <a onClick={() => closeHiddenMenu()} className={styles.navLink} href='/depoimentos'>
              Depoimentos
            </a>
          </li>
        )}
        {!isAtTransparency && (
          <li className={styles.navItem}>
            <a onClick={() => closeHiddenMenu()} className={styles.navLink} href='/transparencia'>
              Transparência
            </a>
          </li>
        )}
        <li className={styles.navItem}>
          <a onClick={() => closeHiddenMenu()} className={styles.navLink} href='/#contact'>
            Contato
          </a>
        </li>
      </ul>
      <div className={`${styles.secondaryWrapper} ${linkStyles}`}>
        <div className={styles.socialWrapper}>
          <a
            className={styles.socialLink}
            href='https://www.facebook.com/CasadaCriancaedoAdolescenteOficial/'
          >
            <LogoFacebook />
          </a>
          <a
            className={styles.socialLink}
            href='https://www.instagram.com/casadacriancaedoadolescente/'
          >
            <LogoInstagram />
          </a>
          <a
            className={styles.socialLink}
            href='https://www.youtube.com/@casadacriancaedoadolescent351'
          >
            <LogoYoutube />
          </a>
        </div>
        <button onClick={toggleDonateModal} className={styles.donateButton}>
          DOE AGORA
        </button>
        {isDonateModalOpen && <Donate />}
      </div>
    </Fragment>
  );
};

'use client';

import { Instagram as LogoInstagram } from '../../components/SVGs/Instagram';
import { Facebook as LogoFacebook } from '../../components/SVGs/Facebook';
import { Youtube as LogoYoutube } from '../../components/SVGs/Youtube';
import { usePathname } from 'next/navigation';

import styles from '../../stylesheets/components/FooterStyles/Footer.module.scss';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isAtHomeOrNews = pathname === '/' || pathname === '/noticias';
  const FooterColor = isAtHomeOrNews ? styles.lightColor : styles.darkColor;
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className={`${styles.container} ${FooterColor}`}>
      <div className={styles.wrapper}>
        <a
          className={styles.link}
          href='https://www.facebook.com/CasadaCriancaedoAdolescenteOficial/'
        >
          <LogoFacebook />
        </a>
        <a className={styles.link} href='https://www.instagram.com/casadacriancaedoadolescente/'>
          <LogoInstagram />
        </a>
        <a className={styles.link} href='https://www.youtube.com/@casadacriancaedoadolescent351'>
          <LogoYoutube />
        </a>
      </div>
      <p className={styles.text}>
        © {currentYear} Casa da Criança e do Adolescente. - CNPJ:01.375.045/0001-03.
      </p>
    </footer>
  );
};

'use client';

import { Instagram as LogoInstagram } from '../../components/SVGs/Instagram';
import { Facebook as LogoFacebook } from '../../components/SVGs/Facebook';
import { Youtube as LogoYoutube } from '../../components/SVGs/Youtube';
import { usePathname } from 'next/navigation';

import styles from '../../stylesheets/components/FooterStyles/Footer.module.scss';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const isAtHome = pathname === '/';
  const FooterColor = isAtHome ? styles.lightColor : styles.darkColor;
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.container} ${FooterColor}`}>
      <div className={styles.wrapper}>
        <Link
          className={styles.link}
          href='https://www.facebook.com/CasadaCriancaedoAdolescenteOficial/'
        >
          <LogoFacebook />
        </Link>
        <Link className={styles.link} href='https://www.instagram.com/casadacriancaedoadolescente/'>
          <LogoInstagram />
        </Link>
        <Link className={styles.link} href='https://www.youtube.com/@casadacriancaedoadolescent351'>
          <LogoYoutube />
        </Link>
      </div>
      <p className={styles.text}>
        © {currentYear} Casa da Criança e do Adolescente. - CNPJ:01.375.045/0001-03.
      </p>
    </footer>
  );
};

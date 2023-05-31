import { Instagram as LogoInstagram } from '../../components/SVGs/Instagram';
import { Facebook as LogoFacebook } from '../../components/SVGs/Facebook';
import { Youtube as LogoYoutube } from '../../components/SVGs/Youtube';
import { Cloud } from '../CloudSlice/Cloud';

import styles from '../../stylesheets/components/FooterStyles/Footer.module.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <a
          className={styles.link}
          href={'https://www.facebook.com/CasadaCriancaedoAdolescenteOficial/'}
        >
          <LogoFacebook />
        </a>
        <a className={styles.link} href={'https://www.instagram.com/casadacriancaedoadolescente/'}>
          <LogoInstagram />
        </a>
        <a className={styles.link} href={'https://www.youtube.com/@casadacriancaedoadolescent351'}>
          <LogoYoutube />
        </a>
      </div>
      <p className={styles.text}>
        © {currentYear} Casa da Criança e do Adolescente. - CNPJ:01.375.045/0001-03.
      </p>
      <Cloud cloudStyle={styles.cloud} />
      <Cloud cloudStyle={styles.cloud} />
      <Cloud cloudStyle={styles.cloud} />
      <Cloud cloudStyle={styles.cloud} />
      <Cloud cloudStyle={styles.cloud} />
    </footer>
  );
};
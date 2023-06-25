import { ArrowRight as LogoArrowRight } from '../SVGs/ArrowRight';
import { Youtube as LogoYoutube } from '../SVGs/Youtube';

import styles from '../../stylesheets/components/TestimonialsComponentsStyles/Testimonial.module.scss';

export const Testimonial: React.FC = () => {
  const thumbnailTime = '#t=0.8';

  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Depoimento de Antônio Francisco Neto{' '}
            <span className={styles.boldHeading}>Prefeito de Volta Redonda</span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony01.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Depoimento de Munir Francisco{' '}
            <span className={styles.boldHeading}>
              Secretário de Ação Comunitária de Volta Redonda
            </span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony02.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Depoimento da Irmã Elizabeth Alves{' '}
            <span className={styles.boldHeading}>
              Fundadora da Casa da Criança e do Adolescente
            </span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony03.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Depoimento de Guaraciara Pouzada de Lavor Lopes{' '}
            <span className={styles.boldHeading}>
              Presidente da Casa da Criança e do Adolescente
            </span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony04.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
      </div>
      <h2 className={styles.heading}>Veja mais Histórias Inspiradoras em nosso Canal do YouTube</h2>
      <div className={styles.linkWrapper}>
        <LogoYoutube />
        <p className={styles.linkHeading}>Casa da Criança e do Adolescente no Youtube</p>
        <a className={styles.link} href='https://www.youtube.com/@casadacriancaedoadolescent351'>
          ACESSE JÁ
          <div className={styles.circle}>
            <LogoArrowRight />
          </div>
        </a>
      </div>
    </div>
  );
};

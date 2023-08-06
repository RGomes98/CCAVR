import styles from '../../stylesheets/components/TestimonialsComponentsStyles/Testimonial.module.scss';

export const Testimonial: React.FC = () => {
  const thumbnailTime = '#t=0.8';

  return (
    <div className={styles.container}>
      <div className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Ir. Elizabeth Alves <span className={styles.boldHeading}>Fundadora</span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony03.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Guaraciara de Lavor Lopes <span className={styles.boldHeading}>Presidente</span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony04.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Antônio Francisco Neto <span className={styles.boldHeading}>Prefeito</span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony01.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Munir Francisco{' '}
            <span className={styles.boldHeading}>
              Presidente da Comissão Criança e Adolescente da ALERJ
            </span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony02.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
        <div className={styles.videoWrapper}>
          <h2 className={styles.heading}>
            Neuza Jordão <span className={styles.boldHeading}>Cofundadora</span>
          </h2>
          <video className={styles.video} preload='metadata' controls>
            <source src={`/videos/testimony05.mp4${thumbnailTime}`} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

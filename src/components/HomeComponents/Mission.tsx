import styles from '../../stylesheets/components/HomeComponentsStyles/Mission.module.scss';

export const Mission: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Nossa Missão</h2>
      <p className={styles.text}>
        Acolher e atender de forma individual e sigilosa crianças e adolescentes encaminhadas pelos
        órgãos do Sistema de Garantia de Direitos, de nossos outros programas e por procura
        espontânea.
      </p>
      <div className={styles.wrapper}>
        <span className={styles.missionHeading}>Visão</span>
        <span className={styles.missionHeading}>Valores</span>
        <span className={styles.missionHeading}>Acolhida</span>
        <span className={styles.missionHeading}>Cuidado</span>
        <span className={styles.missionHeading}>Personalização</span>
        <span className={styles.missionHeading}>Sustentabilidade</span>
        <span className={styles.missionHeading}>Ética</span>
        <span className={styles.missionHeading}>Transparência</span>
        <span className={styles.missionHeading}>Cultura de Paz</span>
        <span className={styles.missionHeading}>Respeito</span>
      </div>
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
    </div>
  );
};

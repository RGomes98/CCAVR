import styles from '../../stylesheets/components/HomeComponentsStyles/Mission.module.scss';

export const Mission: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Nossa Missão</h2>
      <ul className={styles.textWrapper}>
        <li className={styles.text}>
          Ter segmentos com finalidade social, com o objetivo de manter os programas existentes ou
          criar novos.
        </li>
        <li className={styles.text}>
          Promover, com recursos próprios, parcerias, convênios e serviço voluntário, a realização
          de seus objetivos; articulando, divulgando e informando sobre questões referentes à
          criança e ao adolescente.
        </li>
        <li className={styles.text}>
          A aplicação das receitas, rendas, rendimentos ou eventual resultado operacional da
          entidade serão integralmente aplicados em território nacional, na manutenção e no
          desenvolvimento de seus objetivos institucionais, de acordo com o art. 3º, inciso IV do
          Decreto nº 2.536/98.
        </li>
        <li className={styles.text}>
          Prestar serviços sem distinção de raça, credo religioso ou político, nacionalidade, sexo
          ou qualquer outra forma de discriminação.
        </li>
      </ul>
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
      <span className={styles.triangle} />
    </div>
  );
};

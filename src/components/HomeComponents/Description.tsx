import styles from '../../stylesheets/components/HomeComponentsStyles/Description.module.scss';

export const Description: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Quem Somos?</h2>
      <p className={styles.text}>
        A Casa da Criança e do Adolescente é uma associação civil, de direito privado, beneficente,
        com fins econômicos e sem fins lucrativos, fundada em 16 de julho de 1996. É uma entidade de
        atendimento, promoção, prevenção e proteção básica aas crianças, adolescentes e jovens.
        Atendemos crianças e adolescentes vítimas de quaisquer forma de violência, assim como em
        situação de risco ou vulnerabilidade social. A Casa da Criança e do Adolescente atende a 12
        municípios do médio paraíba e 12 municípios da região serrana.
      </p>
    </div>
  );
};

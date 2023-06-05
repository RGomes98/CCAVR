import styles from '../../stylesheets/components/TransparencyComponentsStyles/Description.module.scss';

export const Description: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ética e Transparência</h2>
      <p className={styles.text}>
        Nós da Casa da Criança e do Adolescente acreditamos que a transparência é fundamental para
        manter a confiança de nossos doadores e parceiros. Por isso, disponibilizamos uma área de
        transparência em nosso site, onde é possível ter acesso às informações financeiras e
        prestação de contas de nossas atividades. Acreditamos que a transparência é a base de um
        relacionamento saudável com nossos colaboradores e estamos comprometidos em manter essa
        prática em todas as nossas ações.
      </p>
    </div>
  );
};

import styles from '../../stylesheets/components/TestimonialsComponentsStyles/Description.module.scss';

export const Description: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Vozes Que Fazem a Diferença</h2>
      <p className={styles.text}>
        Nossa área de depoimentos é o espaço onde nossos beneficiados, seus familiares e
        colaboradores podem compartilhar suas experiências e histórias com a Casa da Criança e do
        Adolescente. São relatos que expressam a importância do nosso trabalho e o impacto positivo
        que ele tem na vida de milhares de crianças e adolescentes que atendemos todos os anos.
        Conheça esses depoimentos e descubra como a Casa da Criança e do Adolescente está ajudando a
        transformar vidas.
      </p>
    </div>
  );
};

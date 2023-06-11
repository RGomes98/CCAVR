import styles from '../../stylesheets/components/FAQComponentsStyles/Description.module.scss';

export const Description: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Perguntas Frequentes</h2>
      <p className={styles.text}>
        Bem-vindo à nossa página de Perguntas Frequentes! Aqui você encontrará respostas para as
        dúvidas mais comuns sobre nossos programas e iniciativas. Nossa equipe preparou
        cuidadosamente informações úteis para ajudar a esclarecer suas dúvidas e fornecer
        orientações relevantes. Se você tiver alguma pergunta específica que não esteja listada
        aqui, sinta-se à vontade para entrar em contato conosco. Estamos comprometidos em fornecer
        as informações necessárias para que você possa aproveitar ao máximo sua experiência.
      </p>
    </div>
  );
};

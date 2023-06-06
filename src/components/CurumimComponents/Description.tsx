import styles from '../../stylesheets/components/CurumimComponentsStyles/Description.module.scss';

export const Description = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Programa Curumim</h2>
      <p className={styles.text}>
        Na Casa da Criança e do Adolescente, nosso trabalho lúdico-pedagógico tem como objetivo
        proporcionar um ambiente seguro e acolhedor para crianças em situação de risco social, com
        idade entre 4 e 17 anos e 11 meses, no período em que estão fora da escola. Acreditamos que
        oferecer oportunidades para que essas crianças e adolescentes pratiquem esportes e artes é
        uma forma de prevenir a violência e promover o desenvolvimento pessoal. Buscamos
        constantemente aprimorar nosso atendimento para oferecer uma experiência inclusiva e de
        qualidade, e estamos ansiosos para estarmos aptos a receber crianças com deficiência em
        nossas atividades. Junte-se a nós e ajude-nos a criar um futuro melhor para essas crianças e
        adolescentes.
      </p>
    </div>
  );
};

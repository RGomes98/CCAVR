import styles from '../../stylesheets/components/HomeComponentsStyles/Description.module.scss';

export const Description: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Quem Somos?</h2>
      <p className={styles.text}>
        A Casa da Criança e do Adolescente é uma organização da Sociedade Civil (OSC), fundada em
        16/07/1996, de direito privado sem fins lucrativos, com Certificação de Entidade Beneficente
        de Assistência Social. Atendemos 29 mil crianças e adolescentes de 0 a 18 anos por ano,
        vítimas de diversas formas de violência. Atuamos em diversos programas sociais no estado do
        Rio de Janeiro. A OSC da Casa da Criança e do Adolescente abrange a região ‘Médio Paraíba’
        em 12 Municípios e ’Região Serrana’ com 12 Municípios. Acreditamos nos princípios
        proclamados na Carta das Nações Unidas de que a liberdade, a justiça e a paz no mundo se
        fundamentam no reconhecimento da dignidade inerente e dos direitos iguais e inalienáveis de
        todos os membros da família humana; que a criança deve estar plenamente preparada para uma
        vida independente na sociedade e deve ser educada de acordo com os ideais proclamados na
        Carta, especialmente com Espírito de Paz, Dignidade, Tolerância, Liberdade, Igualdade e
        Solidariedade. Temos como objetivo assegurar à criança e ao adolescente com absoluta
        prioridade a GARANTIA DOS SEUS DIREITOS à vida, à saúde, à alimentação, à educação, à
        moradia, ao lazer, à convivência familiar e comunitária DEFENDENDO-OS DE QUALQUER FORMA DE
        NEGLIGÊNCIA, DISCRIMINAÇÃO E VIOLÊNCIA, através de Projetos e Programas nas áreas: social,
        de saúde, cultura e educação.
      </p>
    </div>
  );
};

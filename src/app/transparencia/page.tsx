import { Accounting } from '@/components/TransparencyComponents/Accounting';
import { Description } from '@/components/HomeComponents/Description';
import { Fragment } from 'react';

export default function Transparency() {
  const descriptionHeading = 'Ética e Transparência';
  const descriptionText =
    'Nós da Casa da Criança e do Adolescente acreditamos que a transparência é fundamental para manter a confiança de nossos doadores e parceiros. Por isso, disponibilizamos uma área de transparência em nosso site, onde é possível ter acesso às informações financeiras e prestação de contas de nossas atividades. Cremos que a transparência é a base de um relacionamento saudável com nossos colaboradores e estamos comprometidos em manter essa prática em todas as nossas ações.';

  return (
    <Fragment>
      <Description heading={descriptionHeading} text={descriptionText} />
      <Accounting />
    </Fragment>
  );
}

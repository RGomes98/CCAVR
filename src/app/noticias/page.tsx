import { Description } from '@/components/HomeComponents/Description';
import { NewsLinks } from '@/components/NewsComponents/NewsLinks';
import { newsData } from '@/data-access/news';
import { Fragment } from 'react';

export default async function News() {
  const descriptionHeading = 'Novidades na Casa da Criança e do Adolescente';
  const descriptionText =
    'Explore as últimas novidades e acontecimentos na Casa da Criança e do Adolescente. Nossa seção de notícias traz informações atualizadas sobre nossos programas, eventos e iniciativas que estão moldando um futuro melhor para as crianças e adolescentes em nossa comunidade. Fique por dentro das realizações que estamos conquistando juntos e saiba como sua participação está fazendo a diferença. Seja parte ativa dessas histórias de transformação e esperança.';

  const news = await newsData.getGroupedByYearAndMonth();

  return (
    <Fragment>
      <Description heading={descriptionHeading} text={descriptionText} />
      <NewsLinks news={news} />
    </Fragment>
  );
}

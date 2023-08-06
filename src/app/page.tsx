import { Description } from '../components/HomeComponents/Description';
import { Projects } from '../components/HomeComponents/Projects';
import { Partners } from '../components/HomeComponents/Partners';
import { Mission } from '../components/HomeComponents/Mission';
import { Contact } from '../components/HomeComponents/Contact';
import { Fragment } from 'react';

export default function Home() {
  const descriptionHeading = 'Quem Somos?';
  const descriptionText =
    'A Casa da Criança e do Adolescente é uma associação civil, de direito privado, beneficente, com fins econômicos e sem fins lucrativos, fundada em 16 de julho de 1996. É uma entidade de atendimento, promoção, prevenção e proteção básica aas crianças, adolescentes e jovens. Atendemos crianças e adolescentes vítimas de quaisquer forma de violência, assim como em situação de risco ou vulnerabilidade social. A Casa da Criança e do Adolescente atende a 12 municípios do médio paraíba e 12 municípios da região serrana.';

  return (
    <Fragment>
      <Description heading={descriptionHeading} text={descriptionText} />
      <Mission />
      <Projects />
      <Partners />
      <Contact />
    </Fragment>
  );
}

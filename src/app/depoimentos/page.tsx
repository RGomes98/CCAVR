import { Testimonial } from '@/components/TestimonialsComponents/Testimonial';
import { Description } from '@/components/HomeComponents/Description';
import { Fragment } from 'react';

export default function Testimonials() {
  const descriptionHeading = 'Vozes Que Fazem a Diferença';
  const descriptionText =
    'Essa área de depoimentos é o espaço onde nossos beneficiados, seus familiares, colaboradores e parceiros podem compartilhar suas experiências e histórias com a Casa da Criança e do Adolescente. São relatos que expressam a importância do nosso trabalho e o impacto positivo que ele tem na vida de milhares de crianças e adolescentes que atendemos todos os anos. Conheça esses depoimentos e descubra como a Casa da Criança e do Adolescente está ajudando a transformar vidas.';

  return (
    <Fragment>
      <Description heading={descriptionHeading} text={descriptionText} />
      <Testimonial />
    </Fragment>
  );
}

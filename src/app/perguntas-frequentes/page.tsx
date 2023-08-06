import { Description } from '@/components/HomeComponents/Description';
import { Questions } from '@/components/FAQComponents/Questions';
import { Fragment } from 'react';

export default function FAQ() {
  const descriptionHeading = 'Perguntas Frequentes';
  const descriptionText =
    'Bem-vindo à nossa página de Perguntas Frequentes! Aqui você encontrará respostas para as dúvidas mais comuns sobre nossos programas e iniciativas. Nossa equipe preparou cuidadosamente informações úteis para ajudar a esclarecer suas dúvidas e fornecer orientações relevantes. Se você tiver alguma pergunta específica que não esteja listada aqui, sinta-se à vontade para entrar em contato conosco. Estamos comprometidos em fornecer as informações necessárias para que você possa aproveitar ao máximo sua experiência.';

  return (
    <Fragment>
      <Description heading={descriptionHeading} text={descriptionText} />
      <Questions />
    </Fragment>
  );
}

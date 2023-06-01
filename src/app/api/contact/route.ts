import { validadeReCAPTCHA } from '@/helpers/validateReCAPTCHA';
import { transporter, mailOptions } from '@/config/nodemailer';
import { generateTemplate } from '@/utils/generateTemplate';

type FormData = {
  reCAPTCHAToken: string;
  name: string;
  email: string;
  telephone: string;
  city: string;
  subject: string;
  content: string;
};

export async function POST(req: Request, res: Response) {
  const { reCAPTCHAToken, name, email, telephone, city, subject, content }: FormData =
    await req.json();

  return new Response('Block Emails');

  if (!reCAPTCHAToken || !name || !email || !telephone || !city || !subject || !content) {
    throw new Response(undefined, {
      status: 400,
      statusText: 'Todos os campos são necessários.',
    });
  }

  const isHuman = await validadeReCAPTCHA(reCAPTCHAToken);
  if (!isHuman) {
    throw new Response(undefined, {
      status: 403,
      statusText: 'Tente novamente mais tarde.',
    });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: email,
      subject: subject,
      text: 'Olá. Este é um e-mail de contato da Casa da Criança e do Adolescente.',
      html: generateTemplate(name, city, telephone, content),
    });

    return new Response(undefined, {
      status: 200,
      statusText: 'E-mail enviado com sucesso!',
    });
  } catch (error) {
    throw new Response(undefined, {
      status: 400,
      statusText: 'Ocorreu algum problema durante o envio do e-mail.',
    });
  }
}

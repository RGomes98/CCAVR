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
  const formData: FormData = await req.json();

  const isFormFilled = Object.values(formData).every((value) => value.trim());
  if (!isFormFilled) {
    return new Response(undefined, {
      status: 400,
      statusText: 'Todos os campos são necessários.',
    });
  }

  const isHuman = await validadeReCAPTCHA(formData.reCAPTCHAToken);
  if (!isHuman) {
    return new Response(undefined, {
      status: 403,
      statusText: 'Tente novamente mais tarde.',
    });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: formData.email,
      subject: formData.subject,
      text: 'Olá. Este é um e-mail de contato da Casa da Criança e do Adolescente.',
      html: generateTemplate(formData.name, formData.city, formData.telephone, formData.content),
    });

    return new Response(undefined, {
      status: 200,
      statusText: 'E-mail enviado com sucesso!',
    });
  } catch (error) {
    return new Response(undefined, {
      status: 400,
      statusText: 'Ocorreu algum problema durante o envio do e-mail.',
    });
  }
}

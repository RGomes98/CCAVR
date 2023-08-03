import { validateReCAPTCHA } from '@/helpers/validateReCAPTCHA';
import { transporter, mailOptions } from '@/config/nodemailer';
import { generateTemplate } from '@/utils/generateTemplate';

type FormData = {
  reCAPTCHAToken: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  content: string;
};

export async function POST(req: Request) {
  const formData: { [index: string]: string } = await req.json();
  Object.keys(formData).forEach((key) => {
    const isDataString = typeof formData[key] === 'string';
    formData[key] = isDataString ? formData[key].trim() : '';
  });

  const isFormFilled = Object.values(formData).every((value) => value);
  const isFormLengthValid = Object.values(formData).length === 7;

  if (!isFormFilled || !isFormLengthValid) {
    return new Response('Todos os campos são necessários!', { status: 400 });
  }

  const { reCAPTCHAToken, name, email, phone, city, subject, content } = formData as FormData;

  const isHuman = await validateReCAPTCHA(reCAPTCHAToken);
  if (!isHuman) return new Response('Tente novamente mais tarde.', { status: 403 });

  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: email,
      subject: subject,
      text: `Olá. Este é um e-mail de ${subject.toLowerCase()} da Casa da Criança e do Adolescente.`,
      html: generateTemplate(name, email, phone, city, subject, content),
      attachments: [
        {
          cid: 'logoCCA',
          filename: 'logoCCA',
          path: `${__dirname}/../../../../../public/logos/pngs/institution/LogoCCA.png`,
        },
      ],
    });

    return new Response('E-mail enviado com sucesso!', { status: 200 });
  } catch (error) {
    return new Response('Ocorreu algum problema durante o envio do e-mail.', { status: 500 });
  }
}

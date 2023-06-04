import { validateReCAPTCHA } from '@/helpers/validateReCAPTCHA';
import { transporter, mailOptions } from '@/config/nodemailer';
import { generateTemplate } from '@/utils/generateTemplate';

export async function POST(req: Request) {
  const formData: { [index: string]: string } = await req.json();
  Object.keys(formData).forEach((key) => (formData[key] = formData[key].trim()));

  const isFormFilled = Object.values(formData).every((value) => value);
  if (!isFormFilled) {
    return new Response(undefined, {
      status: 400,
      statusText: 'Todos os campos são necessários.',
    });
  }

  const isHuman = await validateReCAPTCHA(formData.reCAPTCHAToken);
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
      text: `Olá. Este é um e-mail de ${formData.subject.toLowerCase()} da Casa da Criança e do Adolescente.`,
      html: generateTemplate(
        formData.name,
        formData.email,
        formData.telephone,
        formData.city,
        formData.subject,
        formData.content
      ),
      attachments: [
        {
          cid: 'logoCCA',
          filename: 'logoCCA',
          path: `${__dirname}/../../../../../public/logos/pngs/institution/LogoCCA.png`,
        },
      ],
    });

    return new Response(undefined, {
      // status: 200,
      statusText: 'E-mail enviado com sucesso!',
    });
  } catch (error) {
    return new Response(undefined, {
      status: 400,
      statusText: 'Ocorreu algum problema durante o envio do e-mail.',
    });
  }
}

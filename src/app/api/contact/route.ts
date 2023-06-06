import { validateReCAPTCHA } from '@/helpers/validateReCAPTCHA';
import { transporter, mailOptions } from '@/config/nodemailer';
import { generateTemplate } from '@/utils/generateTemplate';

export async function POST(req: Request) {
  const formData: { [index: string]: string } = await req.json();
  Object.keys(formData).forEach((key) => (formData[key] = formData[key].trim()));

  const isFormFilled = Object.values(formData).every((value) => value);
  if (!isFormFilled) return new Response(undefined, { status: 400 });

  const isHuman = await validateReCAPTCHA(formData.reCAPTCHAToken);
  if (!isHuman) return new Response(undefined, { status: 403 });

  const { name, email, telephone, city, subject, content } = formData;

  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: formData.email,
      subject: formData.subject,
      text: `Olá. Este é um e-mail de ${formData.subject.toLowerCase()} da Casa da Criança e do Adolescente.`,
      html: generateTemplate(name, email, telephone, city, subject, content),
      attachments: [
        {
          cid: 'logoCCA',
          filename: 'logoCCA',
          path: `${__dirname}/../../../../../public/logos/pngs/institution/LogoCCA.png`,
        },
      ],
    });

    return new Response(undefined, { status: 200 });
  } catch (error) {
    return new Response(undefined, { status: 500 });
  }
}

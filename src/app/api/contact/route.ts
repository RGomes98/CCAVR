import { generateEmailTemplate } from '@/helpers/generateEmailTemplate';
import { contactSchema } from '@/lib/schemas/handlers/contact.schema';
import { validateReCAPTCHA } from '@/helpers/validateReCAPTCHA';
import { transporter, mailOptions } from '@/config/nodemailer';

export async function POST(request: Request) {
  try {
    const formData = contactSchema.safeParse(await request.json());

    if (!formData.success) {
      const [error] = Object.values(formData.error.flatten().fieldErrors)[0];
      return new Response(error, { status: 400 });
    }

    const { reCAPTCHAToken, name, email, phone, city, subject, content } = formData.data;

    const isHuman = await validateReCAPTCHA(reCAPTCHAToken);
    if (!isHuman) return new Response('Tente novamente mais tarde.', { status: 403 });

    await transporter.sendMail({
      ...mailOptions,
      replyTo: email,
      subject: subject,
      text: `Olá. Este é um e-mail de ${subject.toLowerCase()} da Casa da Criança e do Adolescente.`,
      html: generateEmailTemplate(name, email, phone, city, subject, content),
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
    if (!(error instanceof Error)) throw error;
    return new Response(error.message, { status: 500 });
  }
}

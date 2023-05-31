import { transporter, mailOptions } from '@/config/nodemailer';

export async function POST(req: Request, res: Response) {
  try {
    await transporter.sendMail({
      ...mailOptions,
      replyTo: 'emaildocontato@email.com',
      subject: 'Contato' || 'Voluntário',
      text: 'Olá. Este é um e-mail de contato da Casa da Criança e do Adolescente.',
      html: '<p>Mensagem do e-mail.</p>',
    });

    return new Response('OK');
  } catch (error) {
    return new Response(undefined, {
      status: 400,
      statusText: 'Unable to send email!',
    });
  }
}

import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  port: Number(process.env.PORT),
  host: process.env.HOST,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  from: process.env.EMAIL,
});

export const mailOptions = {
  from: `Casa da Criança e do Adolescente - Mailer <${process.env.EMAIL}>`,
  to: [process.env.FIRST_INSTITUTION_EMAIL, process.env.SECOND_INSTITUTION_EMAIL] as string[],
};

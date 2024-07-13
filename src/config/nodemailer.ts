import { serverEnv } from '@/lib/schemas/env/server.schema';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  port: serverEnv.MAILER_PORT,
  host: serverEnv.HOST,
  secure: true,
  auth: { user: serverEnv.EMAIL, pass: serverEnv.EMAIL_PASS },
  from: serverEnv.EMAIL,
});

export const mailOptions = {
  from: `Casa da Criança e do Adolescente - Mailer <${serverEnv.EMAIL}>`,
  to: serverEnv.INSTITUTION_EMAIL,
};

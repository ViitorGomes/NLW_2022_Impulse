import { MailService, SendMailData } from "../mailService";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e2faaca0edd027",
    pass: "b8cf06ec9b3022"
  }
});

export class NodemailerMailService implements MailService {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <support@feedget.com>',
            to: 'Vitor Gomes <vitor.gomes-100@hotmail.com>',
            subject,
            html: body
        })
    };
}
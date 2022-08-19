import nodemailer from 'nodemailer';
import aws from 'aws-sdk';
import HandlebarsMailTemplate from './HandlebarsMailTemplate';
import mailConfig from '@config/mail/mail';

interface IMailContact {
  name: string;
  email: string;
}

interface ITemplateVariable {
  [key: string]: string | number;
}

interface IParseMailTemplate {
  file: string;
  variables: ITemplateVariable;
}

interface ISendMail {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplate;
}

export default class SESMail {
  static async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMail): Promise<void> {
    new Promise(() => null);
  }
}

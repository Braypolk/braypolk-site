// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { processEnv } from '@next/env';

const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'braypolk@gmail.com',
    subject: 'New Message From BrayPolk Site',
    from: 'brayPolkSite@bray.dev',
    text: message,
    html: message.replace(/\r\n/g, '<br/>')
  };
  mail.send(data);
  res.status(200).json(data)
}

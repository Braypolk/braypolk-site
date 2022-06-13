// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { processEnv } from '@next/env';

const mail = require('@sendgrid/mail')

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
  return (false)
}

mail.setApiKey(process.env.SENDGRID_API_KEY);
export default function handler(req, res) {
  const body = JSON.parse(req.body);

  // check if form is empty
  for (const key in body) {
    console.log(key, body[key])
    if (body[key] === "" || !body[key]) {
      res.status(422).json({message:'Form value is empty'})
      return;
    }
  };

  // check if email is valid
  let emailStatus = ValidateEmail(body.email)
  if (!emailStatus) {
    res.status(422).json({message:'You have entered an invalid email address!'})
    return;
  }

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
  res.status(200).json({message:'Looks good'})
}

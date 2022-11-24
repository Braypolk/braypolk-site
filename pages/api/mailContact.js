// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { processEnv } from '@next/env';

const mail = require('@sendgrid/mail')

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(mail))
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
      return res.status(422).json({message:'Form value is empty'})
    }
  };

  // check if email is valid
  let emailStatus = ValidateEmail(body.email)
  if (!emailStatus) {
    return res.status(422).json({message:'You have entered an invalid email address!'})
  }

  const message = `
    Great meeting you today!\r\n
    Name: Bray Polkinghorne\r\n
    Email: braypolk@gmail.com\r\n
  `;

  const data = {
    to: body.email,
    subject: 'Great Meeting You',
    from: 'brayPolkSite@bray.dev',
    text: message,
    html: message.replace(/\r\n/g, '<br/>')
  };

  const messageToMe = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}
  `;

  const dataToMe = {
    to: 'braypolk@gmail.com',
    subject: 'New Message From BrayPolk Site',
    from: 'brayPolkSite@bray.dev',
    text: messageToMe,
    html: messageToMe.replace(/\r\n/g, '<br/>')
  };
console.log(data);
  
  (async () => {
    try {
      await mail.send(data);
      try {
        await mail.send(dataToMe);
      } catch (error) {
        console.error(error);
      if (error.response) {
        console.error(error.response.body)
        return res.status(422).json({message:'Something went wrong'})
      }
      }
      return res.status(200).json({message:'Looks good'})
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
        return res.status(422).json({message:'Something went wrong'})
      }
    }
  })();
}

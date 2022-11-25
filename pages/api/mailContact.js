// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { processEnv } from '@next/env'
import fs from 'fs'
const mail = require('@sendgrid/mail')

function ValidateEmail (mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,7})+$/.test(mail)) {
    return true
  }
  return false
}

mail.setApiKey(process.env.SENDGRID_API_KEY)
export default function handler (req, res) {
  const body = JSON.parse(req.body)

  // check if form is empty
  // for (const key in body) {
  //   console.log(key, body[key])
  //   if (body[key] === '' || !body[key]) {
  //     return res.status(422).json({ message: 'Form value is empty' })
  //   }
  // }

  let data,
    dataToMe = {}
  // check if email is valid
  let emailStatus = ValidateEmail(body.email)
  if (!emailStatus) {
    return res
      .status(422)
      .json({ message: 'You have entered an invalid email address!' })
  }

  fs.readFile(process.cwd() + '/public/assets/contact.vcf', (err, file) => {
    if (err) {
      // do something with the error
    }
    if (file) {
      data = {
        to: body.email,
        from: 'braypolk@bray.dev',
        templateId: 'd-ecb9ec5ba883434f91b1c72bd370fadf',
        attachments: [
          {
            content: file.toString('base64'),
            filename: 'brayContactCard.vcf',
            type: 'text/vCard',
            disposition: 'attachment',
            content_id: 'brayContactCard'
          }
        ]
      }


      const messageToMe = `Name: ${body.name}\r\nEmail: ${body.email}\r\nPhone: ${body.phone}`
      const personContact = `BEGIN:VCARD\r\nVERSION:2.1\r\nFN:${body.name}\r\nTEL;CELL:${body.phone}\r\nEMAIL:${body.email}\r\nORG:${body.company}\r\nORG:${body.position}\r\nEND:VCARD`

      dataToMe = {
        to: 'braypolk@gmail.com',
        subject: 'New Contact From BrayPolk Site',
        from: 'braypolk@bray.dev',
        text: messageToMe,
        html: messageToMe.replace(/\r\n/g, '<br/>'),
        attachments: [
          {
            content: btoa(personContact),
            filename: `${body.name}Contact.vcf`,
            type: 'text/vCard',
            disposition: 'attachment',
            content_id: 'brayContactCard'
          }
        ]
      }

      mail
        .send(data)
        .then(() => console.log('Mail sent successfully'))
        .catch(error => {
          console.error(error)

          if (error.response) {
            console.error(error.response.body)
          }
          return res.status(422).json({ message: 'Something went wrong' })
        })
      mail
        .send(dataToMe)
        .then(() => {
          return res.status(200).json({ message: 'Looks good' })
        })
        .catch(error => {
          console.error(error)

          if (error.response) {
            console.error(error.response.body)
          }
          return res.status(422).json({ message: 'Something went wrong' })
        })
    }
  })
}

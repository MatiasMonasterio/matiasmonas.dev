const nodemailer = require("nodemailer");

import { EMAIL_USER, EMAIL_PASSWORD } from "src/constants/env";

export default function contact(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    puerto: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
    secure: true,
  });

  const emailNotif = {
    from: "mmonasterio.dev",
    to: "matias_monasterio@outlook.com",
    subject: "Contact Notification",
    text: message,
    html: `<div>
      <P>From: ${name}</P>
      <P>Email: ${email}</P>
      <P>Message: ${message}</P>
    </div>`,
  };

  const emailconfirm = {
    from: "Matias M. Monasterio",
    to: email,
    subject: "Formulario de contacto",
    text: "Mensaje enviado existosamente!",
    html: `<div>
      Mensaje enviado existosamente! Me estare comunicando a la brevedad
    </div>`,
  };

  transporter.sendMail(emailNotif, (error) => {
    error && res.status(500).send({ error: error });

    transporter.sendMail(emailconfirm, (error) => {
      error ? res.status(500).send({ error: error }) : res.status(200).send();
    });
  });
}

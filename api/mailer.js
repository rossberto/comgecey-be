const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


console.log(process.env.DEV_EMAIL_HOST);
console.log(process.env.DEV_EMAIL_PORT);
console.log(process.env.DEV_EMAIL_USER);
console.log(process.env.DEV_EMAIL_PASSWORD);


const nodemailer = require('nodemailer');
const fs = require('fs');

function sendConfirmation(mail, userId) {
  let transport = nodemailer.createTransport({
    host: process.env.DEV_EMAIL_HOST,
    port: process.env.DEV_EMAIL_PORT, //	25 or 465 or 587 or 2525
    auth: {
      user: process.env.DEV_EMAIL_USER,
      pass: process.env.DEV_EMAIL_PASSWORD
    }
  });

  console.log(mail, userId);

  const html = '<a href="http://registro.comgecey.org/user/' + userId + '">Confirmar</a>';
  //const html = '<a href="http://localhost:3000/user/' + userId + '">Confirmar</a>';
  const message = {
    from: 'no-responder@comgecey.org',
    to: mail,
    subject: 'Confirma tu correo',
    text: 'Confirmar correo',
    html: html //fs.readFileSync(__dirname + '/' + userType + '-invitation.html').toString()
  }

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

function sendWelcomeSuscriber(email) {
  let transport = nodemailer.createTransport({

  });
}

module.exports = sendConfirmation;

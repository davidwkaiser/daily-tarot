const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_TOKEN});

var mailer = {

  // sendMail: (output, email)=>{
  // const sgMail = require('@sendgrid/mail');
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   const msg = {
  //       to: email,
  //       from: process.env.FROM_EMAIL,
  //       subject: 'Your Daily Tarot Card!',
  //       text: 'Your card is '
  //        + output.card.name
  //        + output.text + '!\n'
  //        + output.card.keywords.join('\n')
  // };

  //   sgMail
  //       .send(msg)
  //       .then(() => {
  //         console.log('Email sent');
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  // },
  sendWithMailGun: (output, email) => {
    const text = 'Your card is '
    + output.card.name
    + output.text + '!\n\n'
    + output.card.keywords.join('\n');

    mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Dave <mailgun@${process.env.MAILGUN_DOMAIN}>`,
      to: [email],
      subject: "Your Daily Tarot Card",
      text: text,
      // html: "<h1>Testing some Mailgun awesomness!</h1>"
    })
  .then(msg => console.log(msg)) // logs response data
  .catch(err => console.error(err)); // log
  }
};
module.exports = mailer;

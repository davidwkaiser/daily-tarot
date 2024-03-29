var mailer = {
  // sg: require('sendgrid')(process.env.SENDGRID_API_KEY),

// setRequest: function (output, email){
//   var helper = require('sendgrid').mail;
//   var from_email = new helper.Email(process.env.from_email);
//   var to_email = new helper.Email(email);
//   var subject = 'Your Daily Tarot Card!';
//   var keywords = this.getKeywords(output.card.keywords)
//   var content = new helper.Content('text/plain',
//     'Your card is '
//     + output.card.name
//     + output.text + '!\n'
//     + keywords)
//   var mail = new helper.Mail(from_email, subject, to_email, content);
//
//   var completedRequest = mailer.sg.emptyRequest({
//     method: 'POST',
//     path: '/v3/mail/send',
//     body: mail.toJSON(),
//   });
//   return completedRequest;
//   },

// getKeywords: function(arrayOfWords){
//   return arrayOfWords.join(', ')
// },

// sendMail: function (output, email){
//   var request = mailer.setRequest(output, email);
//   mailer.sg.API(request, function(error, response) {
//     console.log("SendGrid status code: "+ response.statusCode);
//     console.log("SendGrid response body: ");
//     console.log(response.body)
//     console.log("SendGrid response headers:");
//     console.log(response.headers);
//     });
//   }
  sendMail: (output, email)=>{

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: email,
        from: process.env.FROM_EMAIL,
        subject: 'Your Daily Tarot Card!',
        text: 'Your card is '
         + output.card.name
         + output.text + '!\n'
         + output.card.keywords.join(', ')
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }

    sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
  }
}
module.exports = mailer;

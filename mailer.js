// var helper = require('sendgrid').mail;
// var from_email = new helper.Email('davidwkaiser@gmail.com');
// var to_email = new helper.Email('davidwkaiser@yahoo.com');
// var subject = 'Hello World from the SendGrid Node.js Library!';
// var content = new helper.Content('text/plain', 'This is a test!');
// var mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON(),
// });

// function sendMail(){
//   sg.API(request, function(error, response) {
//     console.log(response.statusCode);
//     console.log(response.body);
//     console.log(response.headers);
//   });
// }
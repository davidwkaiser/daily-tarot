var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

exports.sendMail = function (output){
  var request = setRequest(output);
  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
}

function setRequest(output){
    console.log("in mailer.js, output is: "+JSON.stringify(output))
  var helper = require('sendgrid').mail;
  var from_email = new helper.Email('davidwkaiser@gmail.com');
  var to_email = new helper.Email('davidwkaiser@yahoo.com');
  var subject = 'Your Daily Tarot Card!';
  var content = new helper.Content('text/plain',
    'Your card is '
    + output.card
    + output.txt + "!")
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var completedRequest = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });
  return completedRequest;
}


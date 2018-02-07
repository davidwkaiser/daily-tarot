const express = require('express')
const app=express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = require('./data')
const mailer = require('./mailer')
// require('./mailer')
let cards = data.cards

app.get('/', function(req, res){
  let cardPulled = randomNumber()
  var direction = inverted()
  var text = directionText(direction)
  res.render('index', {
    status: {
      card: cards[cardPulled],
      direction: direction,
      text: text
    }
  })
})

app.get('/mail', function(req, res){
  console.log("I just mailed something!");
  mailer.sendMail();
  res.redirect('/');
})

function randomNumber(){
  return Math.floor(Math.random()*cards.length)
}

function inverted(){
  return Math.floor(Math.random()*2) === 1 ? 0 : 1
}

function directionText(direction){
  return direction === 0 ? "" : ", inverted"
}

app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000!")
})


//sendgrid code below

// var helper = require('sendgrid').mail;
// var from_email = new helper.Email('davidwkaiser@gmail.com');
// var to_email = new helper.Email('davidwkaiser@yahoo.com');
// var subject = 'Hello World from the SendGrid Node.js Library!';
// var content = new helper.Content('text/plain', 'This is a test!');
// var mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// console.log("the API key is " + process.env.SENDGRID_API_KEY);
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
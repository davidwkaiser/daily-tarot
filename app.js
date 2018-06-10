const express = require('express')
const app = express()
const fn = require('./functions')
const data = require('./data')
const mailer = require('./mailer')
//const cards = data.cards

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get('/mailme/:index/:email', function(req, res){
  // console.log("yay!")
  let index = req.params.index
  let email = req.params.email
  console.log(index)
  console.log(email)
  let value = fn.cardByIndex(index)
  console.log("card: " + value.card.name)
  mailer.sendMail(output, email)
})

app.get('/', function(req, res){
  console.log("LOG: Requesting IP address - " + req.ip)
  output = fn.getCard()
  res.render('index', {
    status: output
  })
  mailer.sendMail(output, "davidwkaiser@yahoo.com");
  // mailer.sendMail(output, process.env.to_email);
})

app.use(function(req,res){
  res.status(400)
  res.render('404', {})
})

app.use(function(error, req, res, next){
  res.status(500)
  res.render('500', {error:error})
})


app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000 locally or process.env.PORT at Heroku!")
})


module.exports = app;
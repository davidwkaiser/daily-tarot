const express = require('express')
const bodyParser = require('body-parser')
const fn = require('./functions')
const data = require('./data')
const mailer = require('./mailer')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

app.post('/mailme', function(req, res){
  let index = req.body.index
  let email = req.body.email
  let value = fn.cardByIndex(index)
  mailer.sendMail(value, email)
})

app.get('/', function(req, res){
  console.log("LOG: Requesting IP address - " + req.ip)
  output = fn.getCard()
  res.render('index', {
    status: output
  })
  mailer.sendMail(output, process.env.to_email);
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
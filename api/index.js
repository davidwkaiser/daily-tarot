const express = require('express')
const bodyParser = require('body-parser')
const fn = require('../functions')
const mailer = require('../mailer')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");

app.post('/mailme', function(req, res){
  console.log(req)
  let index = req.body.index
  let email = req.body.email
  let value = fn.cardByIndex(index)
  res.end()
  mailer.sendMail(value, email)
})

const cron = async (req, res) => {
  console.log("CRON JOB")
  output = fn.getCard()
  await mailer.sendMail(output, process.env.TO_EMAIL);
  setTimeout(res.end(), 2500);
}

app.get('/cron', cron)

app.get('/', function(req, res){
  console.log("LOG: Requesting IP address - " + req.ip)
  output = fn.getCard()
  res.render('index', {
    status: output
  })
  mailer.sendMail(output, process.env.TO_EMAIL);
})

app.use(function(req,res){
  res.status(400)
  res.render('404', {})
})

app.use(function(error, req, res, next){
  res.status(500)
  res.render('500', {error:error})
})

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`app listening on port ${port}!`)
})

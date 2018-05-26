const express = require('express')
const app = express()
const fn = require('./functions')
const data = require('./data')
const mailer = require('./mailer')
const cards = data.cards
var cron = require('cron').CronJob

// code related to logging is useful, but doesn't work in Heroku, so it has been
// left in for reference, but disabled.
// const fs = require('fs')
// const logger = require('morgan')
// const logFile = fs.createWriteStream(__dirname + '/log.txt', {flags: 'a'})


app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.use(express.static('public'))
// app.use(logger(':remote-addr :date[web]', {stream: logFile}))

app.get('/', function(req, res){
  console.log("LOG: Requesting IP address - " + req.ip)
  var output = fn.getCard(cards);
  res.render('index', {
    status: output
  })
  mailer.sendMail(output);
})

app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000 locally or process.env.PORT at Heroku!")
})

var job1 = new cron({
  cronTime: '0 7 * * *',
  onTick: function(){
    var cronOutput = fn.getCard(cards)
    mailer.sendMail(cronOutput)
  },
  start: true
})

module.exports = app;
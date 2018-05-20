const express = require('express')
const app = express()
const fn = require('./functions')
var cron = require('cron').CronJob

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = require('./data')
const mailer = require('./mailer')
let cards = data.cards

app.get('/', function(req, res){
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
  cronTime: '* * * * *',
  onTick: function(){
    var cronOutput = fn.getCard(cards)
    mailer.sendMail(cronOutput)
  },
  start: true
})

console.log(job1.running)

module.exports = app;
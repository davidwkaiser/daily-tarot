//This is a page to collect some cool code that is not used,
//but I still want to hang on to it for reference


//Logging with Morgan
// code related to logging is useful, but doesn't work in Heroku, so it has been
// left in for reference, but disabled.
// const fs = require('fs')
// const logger = require('morgan')
// const logFile = fs.createWriteStream(__dirname + '/log.txt', {flags: 'a'})


// app.use(express.static('public')) ???
// app.use(logger(':remote-addr :date[web]', {stream: logFile}))

//var cron = require('cron').CronJob
//Cron Jobs in NodeJS
// var job1 = new cron({
//   cronTime: '0 7 * * *',
//   onTick: function(){
//     var cronOutput = fn.getCard(cards)
//     mailer.sendMail(cronOutput)
//   },
//   start: true
// })

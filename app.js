const express = require('express')
const app=express()
const fn = require('./functions')
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = require('./data')
const mailer = require('./mailer')
let cards = data.cards

app.get('/', function(req, res){
  let cardPulled = fn.randomNumber(cards.length)
  var direction = fn.inverted()
  var text = fn.directionText(direction)
  var output = {
      card: cards[cardPulled],
      direction: direction,
      text: text
    }
  res.render('index', {
    status: output
  })
  mailer.sendMail(output);
})

app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000 locally or process.env.PORT at Heroku!")
})

module.exports = app;
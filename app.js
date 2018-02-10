const express = require('express')
const app=express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = require('./data')
const mailer = require('./mailer')
// require('./mailer')
let cards = data.cards

app.get('/*', function(req, res){
  let cardPulled = randomNumber()
  var direction = inverted()
  var text = directionText(direction)
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

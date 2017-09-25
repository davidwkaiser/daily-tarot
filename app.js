const express = require('express')
const app=express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = require('./data')
let cards = data.cards

app.get('/', function(req, res){
  let cardPulled = randomNumber()
  var direction = inverted()
  var additionalText = directionText(direction)
  // var style = setStyle(direction)
  res.render('index', {
    status: {
      card: cards[cardPulled],
      direction: direction,
      directionText: additionalText
    }
  })
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

// function setStyle(direction){
//   return direction === 0 ? "" : "transform: rotate(180deg)"
// }

app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000!")
})



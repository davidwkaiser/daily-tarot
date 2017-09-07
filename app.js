const express = require('express')
const app=express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.use(express.static('public'))

const data = require('./data')
let cards = data.cards

app.get('/', function(req, res){
  let cardPulled = randomNumber()
  res.render('index', {
    status: {
      card: cards[cardPulled],
      direction: inverted()
    }
  })
})

function randomNumber(){
  return Math.floor(Math.random()*cards.length)
}

function inverted(){
  return Math.floor(Math.random()*2) === 1 ? "" : ", inverted"
}


app.listen(process.env.PORT || 3000, function(){
  console.log("app listening on port 3000!")
})



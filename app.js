const express = require('express')
const app=express()
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

const data = require('./data')
let cards = data.cards

app.get('/', function(req, res){
  res.render('index', {card: cards[randomNumber()]})
})

function randomNumber(){
  return Math.floor(Math.random()*cards.length)
}


app.listen(3000, function(){
  console.log("app listening on port 3000!")
})



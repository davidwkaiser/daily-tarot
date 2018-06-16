const data = require('./data')
const cards = data.cards

var functions = {
    "getCard": function(){
    let cardIndex = functions.randomNumber(cards.length)
    var direction = functions.inverted()
    var text = functions.directionText(direction)
    var output = {
        card: cards[cardIndex],
        direction: direction,
        text: text,
        cardIndex: cardIndex
    }
    return output
  },
  "randomNumber": function(number){
    return Math.floor(Math.random()*number);
    },
  "inverted": function(){
  return Math.floor(Math.random()*2) === 1 ? 0 : 1
   },
  "directionText": function(direction){
    return direction === 0 ? "" : ", inverted"
   },
   "cardByIndex": function(index){
    return {
      card: cards[index],
      text: ""
    }
   }
}

module.exports = functions;

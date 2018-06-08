var functions = {
    "getCard": function(cards){
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
   }
}

module.exports = functions;

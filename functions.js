var functions = {
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




// var randomNumber = (number) => {
//   return Math.floor(Math.random()*number);
// }

// module.exports = randomNumber;

var fn = require("../functions");
const data = require('../data')
let cards = data.cards

describe('Functions File', function () {
  it('randomNumber() returns an integer in the range', function() {
    var max = 5;
    var number = fn.randomNumber(max);
    expect(number).toEqual(jasmine.any(Number));
    expect(number).toBeLessThan(max)
  });

  it('inverted() returns a one or zero', function(){
    number = fn.inverted()
    expect(number).toEqual(jasmine.any(Number));
    expect(number).toBeLessThan(2)
  })

  it('directionText() handles inverted status', function(){
    var text0 = fn.directionText(0);
    var text1 = fn.directionText(1);
    expect(text0).toEqual("");
    expect(text1).toEqual(", inverted");
  });

  it('getCard() returns an output object', function(){
    output = fn.getCard(cards)
    expect(output.card).not.toBeNull
  })
});

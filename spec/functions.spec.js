var fn = require("../functions");

describe('App File', function () {
  it('randomNumber returns an integer in the range', function() {
    var max = 5;
    var number = fn.randomNumber(max);
    expect(number).toEqual(jasmine.any(Number));
    expect(number).toBeLessThan(max)
  });

  it('handles inverted status', function(){
    var text0 = fn.directionText(0);
    var text1 = fn.directionText(1);
    expect(text0).toEqual("");
    expect(text1).toEqual(", inverted");
  });
});

var rn = require("../randomnumber");
// console.log("here it is " + rn.randomNumber(3));

describe('Random Number', function () {

  it('randomNumber returns an integer in the range', function() {
    var max = 5;
    var number = rn(max);
    expect(number).toEqual(jasmine.any(Number));
    expect(number).toBeLessThan(max)
  });
});

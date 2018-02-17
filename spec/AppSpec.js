describe('App File', function () {

  it('randomNumber returns an integer in the range', function() {
    var max = 5;
    var number = randomNumber(max);
    expect(number).toEqual(jasmine.any(Number));
    expect(number).toBeLessThan(max)
  });

  it('handles inverted status', function(){
    var text0 = directionText(0);
    var text1 = directionText(1);
    expect(text0).toEqual("");
    expect(text1).toEqual(", inverted");
  });

});
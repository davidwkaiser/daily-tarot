var mailer = require("../mailer");
const data = require('../data')
let cards = data.cards

var output = {
      card: cards[0],
      direction: 0,
      text: ""
    }

describe('Mailer File', function(){

  it('creates a proper SG mail request', function(){
    request = mailer.setRequest(output);
    expect(request.method).toEqual('POST')
    expect(request.body.content[0].value).toEqual('Your card is The Fool!\nInnocence, New Beginnings, Optimism')
    expect(request.body.content[0].value).toMatch("Innocence")
  })
})
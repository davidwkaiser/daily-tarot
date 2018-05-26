const fn = require('./functions')
const data = require('./data')
const mailer = require('./mailer')
const cards = data.cards

var output = fn.getCard(cards)
mailer.sendMail(output)


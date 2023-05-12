const fn = require('./functions')
const mailer = require('./mailer')

var output = fn.getCard()
mailer.sendMail(output, process.env.to_email)


'use strict'

const ui = require('./ui.js')

const sendEmail = function (data) {
  emailjs.send(
    'gmail',
    'my_template',
    data
  ).then(function (response) {
    console.log('SUCCESS. status=%d, text=%s', response.status, response.text)
    ui.emailSendSuccess()
  }, function (err) {
    console.log('FAILED. error=', err)
    ui.emailSendFailure()
  })
}

module.exports = {
  sendEmail
}

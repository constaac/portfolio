'use strict'

const ui = require('./ui.js')

const checkEmptyFields = function () {
  if ($('#name').val() === '' || $('#email').val() === '' || $('#message').val() === '') {
    ui.errorMessage('Your Name, Email, and a Message are required')
    return true
  }
}

const isValidEmailAddress = function () {
  const pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test($('#email').val())
}

const checkEmail = function () {
  if (!isValidEmailAddress()) {
    ui.errorMessage('You must provide a valid Email address')
    return true
  } else {
    return false
  }
}

const checkCaptcha = function () {
  if (Recaptcha.getResponse().length === 0) {
    console.log('empty captcha')
  } else {
    console.log('checked captcha')
  }
}

const sendEmail = function (data) {
  checkCaptcha()
  return
  if (checkEmail()) {
    return
  }
  if (checkEmptyFields()) {
    return
  }
  $('#success').html("<div class='alert'>")
  $('#success > .alert')
      .append('<strong>Your message is sending... </strong>')
  $('#success > .alert')
      .append('</div>')
  emailjs.send(
    'gmail',
    'my_template',
    data
  ).then(function (response) {
    console.log('SUCCESS. status=%d, text=%s', response.status, response.text)
    ui.emailSendSuccess()
  }, function (err) {
    console.log('FAILED. error=', err)
    ui.emailSendFailure('<strong>Sorry, it seems that my mail server is not responding. Please try again later!')
  })
}

module.exports = {
  sendEmail
}

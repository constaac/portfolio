'use strict'

const emailSendSuccess = function (response) {
  // Enable button & show success message
  $('#success').html("<div class='alert alert-success'>")
  $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times")
      .append('</button>')
  $('#success > .alert-success')
      .append('<strong>Your message has been sent. </strong>')
  $('#success > .alert-success')
      .append('</div>')

  // Reset Captcha
  grecaptcha.reset()

  // clear all fields
  $('#contactForm').trigger('reset')
  $('.floating-label-form-group').removeClass('floating-label-form-group-with-value')
  $('#btnSubmit').attr('disabled', false)
}

const emailSendFailure = function (response) {
  $('#success').html("<div class='alert alert-danger'>")
  $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times")
      .append('</button>')
  $('#success > .alert-danger').append('<strong>Sorry, it seems that my mail server is not responding. Please try again later!')
  $('#success > .alert-danger').append('</div>')

  // clear all fields
  $('#contactForm').trigger('reset')
  $('.floating-label-form-group').removeClass('floating-label-form-group-with-value')
  $('#btnSubmit').attr('disabled', false)
}

const errorMessage = function (message) {
  $('#success').html("<div class='alert'>")
  $('.alert').css('color', 'red')
  $('#success > .alert')
      .append('<strong>' + message + '</strong>')
  $('#success > .alert')
      .append('</div>')
  setTimeout(function () {
    $('#success').html('')
    $('#btnSubmit').attr('disabled', false)
    $('.alert').css('color', 'black')
  }, 3000)
}

module.exports = {
  emailSendSuccess,
  emailSendFailure,
  errorMessage
}

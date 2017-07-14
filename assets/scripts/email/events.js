'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')

const onEmailSubmit = function (event) {
  event.preventDefault()
  $('#btnSubmit').attr('disabled', true)
  const data = getFormFields(event.target)
  api.sendEmail(data)
}

module.exports = {
  onEmailSubmit
}

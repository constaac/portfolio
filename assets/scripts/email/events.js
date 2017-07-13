'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api.js')

const onEmailSubmit = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.sendEmail(data)
}

module.exports = {
  onEmailSubmit
}

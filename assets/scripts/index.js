'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const emailEvents = require('./email/events.js')
const uiFeatures = require('./features/ui.js')
// const emailAPI = require('./email/api.js')

require('./jqBootstrapValidation.js')

$(() => {
  setAPIOrigin(location, config)

  uiFeatures.navSectionHighlight()
  uiFeatures.navOffset()
  uiFeatures.autoCloseNavMenu()
  uiFeatures.floatingFormHeaders()
  uiFeatures.smoothScrolling()

  emailjs.init('user_LkXIhIDN1aKHEostEfnys')
  $('#contactForm').on('submit', emailEvents.onEmailSubmit)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

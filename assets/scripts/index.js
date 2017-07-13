'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

// require('./emailjs.min.js')

$(() => {
  setAPIOrigin(location, config)

  emailjs.init("user_LkXIhIDN1aKHEostEfnys")
  emailjs.send("gmail", "my_template", {"message_html":"Testing this out","from_name":"Mike","from_email":"mike@email.com","phone":"1234567898"})
    .then(function(response) {
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function (err) {
      console.log("FAILED. error=", err);
    });
})

$('a[href*="#"]').click(function(event) {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    let target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    if (target.length) {
      event.preventDefault()
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        const $target = $(target)
        $target.focus()
        if ($target.is(':focus')) {
          return false
        } else {
          $target.attr('tabindex', '-1')
          $target.focus()
        }
      })
    }
  }
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

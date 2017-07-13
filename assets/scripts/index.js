'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

$('a[href*="#"]').click(function (event) {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    let target = $(this.hash)
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
    if (target.length) {
      event.preventDefault()
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
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

'use strict'

const navOffset = function () {
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })
}

const navSectionHighlight = function () {
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  })
}

const autoCloseNavMenu = function () {
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click()
  })
}

const smoothScrolling = function () {
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
}

const floatingFormHeaders = function () {
  $('body').on('input propertychange', '.floating-label-form-group', function (e) {
    $(this).toggleClass('floating-label-form-group-with-value', !!$(e.target).val())
  }).on('focus', '.floating-label-form-group', function () {
    $(this).addClass('floating-label-form-group-with-focus')
  }).on('blur', '.floating-label-form-group', function () {
    $(this).removeClass('floating-label-form-group-with-focus')
  })
}

module.exports = {
  navOffset,
  navSectionHighlight,
  autoCloseNavMenu,
  floatingFormHeaders,
  smoothScrolling
}

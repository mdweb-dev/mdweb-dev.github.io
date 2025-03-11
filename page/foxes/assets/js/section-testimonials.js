/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/scripts/section/testimonials.js ***!
  \*********************************************/
window.addEventListener("DOMContentLoaded", function () {
  var jsTestimonials = document.querySelector('.js-testimonials');
  if (jsTestimonials) {
    var jsTestimonialsSwiper = new Swiper(jsTestimonials.querySelector('.swiper'), {
      loop: true,
      navigation: {
        nextEl: jsTestimonials.querySelector('.testimonials__next'),
        prevEl: jsTestimonials.querySelector('.testimonials__prev')
      },
      pagination: {
        el: jsTestimonials.querySelector('.testimonials__pagination'),
        type: 'bullets',
        clickable: true
      }
    });
  }
});
/******/ })()
;
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/scripts/image-slider.js ***!
  \*************************************/
window.addEventListener("DOMContentLoaded", function () {
  console.log('ES6');
  var imageSliderDispay = document.querySelector('.image-slider__dispay');
  var imageNavigationPrev = document.querySelector('.image-navigation__prev');
  var imageNavigationNext = document.querySelector('.image-navigation__next');
  imageNavigationPrev.addEventListener('click', function (event) {
    event.preventDefault();
    var imageSlideAll = document.querySelectorAll('.image-slide');
    imageSliderDispay.prepend(imageSlideAll[imageSlideAll.length - 1]);
  });
  imageNavigationNext.addEventListener('click', function (event) {
    event.preventDefault();
    var imageSlideAll = document.querySelectorAll('.image-slide');
    imageSliderDispay.appendChild(imageSlideAll[0]);
  });
  var imageSlideAll = document.querySelectorAll('.image-slide');
  imageSlideAll.forEach(function (itemCard) {
    itemCard.addEventListener('click', function (event) {
      event.preventDefault();
      var imageSlideAll = document.querySelectorAll('.image-slide');
      imageSliderDispay.appendChild(imageSlideAll[0]);
    });
  });
});
/******/ })()
;
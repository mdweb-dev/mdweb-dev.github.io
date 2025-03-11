/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/scripts/common.js ***!
  \*******************************/
window.addEventListener("DOMContentLoaded", function () {
  var bodyHtml = document.body;

  /**
   * menu mobile
   */
  var menuButton = document.querySelector('.button-menu');
  if (menuButton) {
    menuButton.addEventListener('click', function (e) {
      e.preventDefault();
      bodyHtml.classList.toggle('menu-open');
    });
  }
});

//If you really need Jquery
/*
$(document).ready(function(){

})
 */
/******/ })()
;
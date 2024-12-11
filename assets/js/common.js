/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/scripts/common.js ***!
  \*******************************/
window.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("light-mode");
  var themeSwitch = document.createElement("button");
  themeSwitch.textContent = "Змінити тему";
  document.body.appendChild(themeSwitch);
  themeSwitch.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
});

//If you really need Jquery
/*
$(document).ready(function(){

})
 */
/******/ })()
;
/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/scripts/common.js ***!
  \*******************************/
window.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  var splitHeading = new SplitText(".js-split-heading", {
    type: "chars,words"
  });
  var splitPlus = new SplitText(".js-split-plus", {
    type: "chars"
  });
  var splitChar = new SplitText(".js-split-char", {
    type: "chars"
  });
  var jsSplitPlus = document.querySelectorAll(".js-split-plus");
  if (jsSplitPlus.length) {
    jsSplitPlus.forEach(function (splitPlus) {
      var splitPlusChar = splitPlus.querySelectorAll(".button-plus__name div");
      splitPlusChar.forEach(function (_char, index) {
        var delay = 0.05 + index * 0.05;
        //char.style.transitionDelay = `${delay}s`;
        _char.style.setProperty("--tnDelay", "".concat(delay, "s"));
        _char.setAttribute("data-letter", _char.textContent);
      });
    });
  }
  gsap.from(splitHeading.chars, {
    delay: 1,
    opacity: 0,
    duration: 1,
    stagger: {
      amount: 1,
      from: "random"
    }
  });

  /** barba js */
  function barbaInit() {
    barba.init({
      transitions: [{
        name: "opacity-transition",
        leave: function leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0
          });
        },
        enter: function enter(data) {
          return gsap.from(data.next.container, {
            opacity: 0
          });
        }
      }]
    });
  }
  //barbaInit();

  // --x, --y position
  var pos = document.documentElement;
  pos.addEventListener("mousemove", function (event) {
    gsap.to(pos, {
      duration: 0.5,
      "--x": event.clientX + "px",
      "--y": event.clientY + "px"
    });
  });
  var header = document.querySelector("header.header"),
    scrollPrev = 0;
  window.addEventListener("scroll", function () {
    var scrolled = document.documentElement.scrollTop;
    if (scrolled >= 50 && scrolled > scrollPrev) {
      header.classList.add("out");
      header.classList.add("fixed");
    } else if (scrolled < 50) {
      header.classList.remove("fixed");
      header.classList.remove("out");
    } else {
      header.classList.remove("out");
    }
    scrollPrev = scrolled;
  });

  /**
   * particle js libs
   */
  particlesJS.load("particles-js", "assets/libs/particles/particles.json", function () {
    console.log("callback - particles.js config loaded");
  });

  /* GSAP ====================================== */
  gsap.utils.toArray("section").forEach(function (item, index) {
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      //once: true,
      toggleActions: "play play play play",
      onToggle: function onToggle(self) {
        return item.classList.add("is-visible");
      }
    });
  });
});

//If you really need Jquery
/*
$(document).ready(function(){

})
 */
/******/ })()
;
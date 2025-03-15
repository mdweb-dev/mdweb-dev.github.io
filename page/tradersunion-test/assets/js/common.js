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
  var menu = document.querySelector('.header-nav');
  if (menuButton) {
    menuButton.addEventListener('click', function (e) {
      e.preventDefault();
      bodyHtml.classList.toggle('menu-open');
    });
  }
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      bodyHtml.classList.remove('menu-open');
    }
  });
  function handleResize() {
    var jsClone = document.querySelector('.js-clone').cloneNode(true);
    var jsInner = document.querySelector('.js-inner');
    var isMobile = window.matchMedia("(max-width: 1199px)").matches;
    if (isMobile) {
      if (!jsInner.contains(jsClone)) {
        jsInner.append(jsClone);
      }
    } else {
      var cloneElement = jsInner.querySelector('.js-clone');
      if (cloneElement) {
        jsInner.removeChild(cloneElement);
      }
    }
  }
  handleResize();
  window.matchMedia("(max-width: 1199px)").addEventListener("change", handleResize);

  /**
   * auto scroll right
   */
  var container = document.querySelector(".js-right-scroll");
  if (container) {
    var observer = new MutationObserver(scrollToRight);
    observer.observe(container, {
      childList: true,
      subtree: true
    });
  }
  function scrollToRight() {
    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  }
  scrollToRight();
  window.addEventListener("resize", scrollToRight);

  /**
   * tooltip
   */
  document.querySelectorAll(".js-tooltip").forEach(function (icon) {
    icon.addEventListener("mouseenter", function () {
      var tooltipText = this.dataset.tooltip;
      var tooltip = document.createElement("div");
      tooltip.className = "custom-tooltip";
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);
      var rect = this.getBoundingClientRect();
      tooltip.style.left = "".concat(rect.left + window.scrollX, "px");
      tooltip.style.top = "".concat(rect.top + window.scrollY - tooltip.offsetHeight - 3, "px");
      this.dataset.tooltipId = tooltip;
    });
    icon.addEventListener("mouseleave", function () {
      var _document$querySelect;
      (_document$querySelect = document.querySelector(".custom-tooltip")) === null || _document$querySelect === void 0 || _document$querySelect.remove();
    });
  });

  /**
   * replace name
   */
  function updateNamesForMobile() {
    var isMobile = window.matchMedia("(max-width: 575px)").matches;
    var splitName = document.querySelectorAll(".js-split-name");
    splitName.forEach(function (nameEl) {
      var originalText = nameEl.textContent.trim();
      if (isMobile) {
        if (originalText.includes("days ago")) {
          nameEl.textContent = originalText.replace(/(\d+) days ago/, "$1d ago");
        } else {
          var nameParts = originalText.split(" ");
          if (nameParts.length > 1) {
            nameEl.textContent = nameParts[0] + " " + nameParts[1][0] + ".";
          }
        }
      } else {
        nameEl.textContent = originalText;
      }
    });
  }
  updateNamesForMobile();
  window.addEventListener('resize', updateNamesForMobile);
});

//If you really need Jquery
/*
$(document).ready(function(){

})
 */
/******/ })()
;
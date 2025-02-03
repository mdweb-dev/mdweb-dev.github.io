/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/click-plus.js":
/*!***********************************!*\
  !*** ./src/scripts/click-plus.js ***!
  \***********************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  console.log('ES6');
  var bodyElement = document.body;
  if (bodyElement) {
    console.log(bodyElement);
  }

  //bodyElement.addEventListener('click', event => {
  document.addEventListener('click', function (event) {
    var boomClick = document.createElement('div');
    boomClick.classList.add('boom-click');
    boomClick.style.top = event.clientY - boomClick.offsetTop + 'px';
    boomClick.style.left = event.clientX - boomClick.offsetLeft + 'px';
    boomClick.style.filter = "hue-rotate(".concat(Math.random() * 360, "deg)");
    bodyElement.appendChild(boomClick);
    for (var i = 0; i <= 7; i++) {
      var boomChild = document.createElement('span');
      boomChild.style.transform = "rotate(".concat(i * 45, "deg)");
      boomClick.appendChild(boomChild);
    }
    setTimeout(function () {
      boomClick.remove();
    }, 1500);
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _click_plus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-plus.js */ "./src/scripts/click-plus.js");
/* harmony import */ var _click_plus_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_click_plus_js__WEBPACK_IMPORTED_MODULE_0__);
window.addEventListener("DOMContentLoaded", function () {});


//If you really need Jquery
/*
$(document).ready(function(){

})
 */
})();

/******/ })()
;
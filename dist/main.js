/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linked-list-class.js":
/*!**********************************!*\
  !*** ./src/linked-list-class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkedList: () => (/* binding */ LinkedList)
/* harmony export */ });
/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-class */ "./src/node-class.js");



console.log(_node_class__WEBPACK_IMPORTED_MODULE_0__.Node);
// eslint-disable-next-line import/prefer-default-export
class LinkedList {
    constructor (head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

   append(chosenValue) {
    const newNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__.Node();
    newNode.value = chosenValue;
    console.log(newNode);
    

    this.tail = newNode;
    this.tail.nextNode = null;
    console.log(this.tail.value);
    console.log(this.tail.nextNode);

    // need to somehow change the preceding node's 'nextNode' value here to the
    // newly added node's value

    this.length += 1;
    console.log(this.length) 

    return this.tail
    
   }


   prepend(chosenValue) {
    let oldHead;
    // transfer data from old head:
    if (this.head) {
        oldHead = this.head;
        console.log(oldHead.nextNode);
    }
    console.log(oldHead);
    

    const newNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__.Node();
    newNode.value = chosenValue;
    // console.log(newNode);

    this.head = newNode;

    console.log(this.tail);

    if (this.length < 2) {
        this.head.nextNode = this.tail.value
    } else {
        this.head.nextNode = oldHead.value;
    }
    console.log(this.head);

    this.length += 1;
    console.log(this.length);

    return this.head

   }
};






/***/ }),

/***/ "./src/node-class.js":
/*!***************************!*\
  !*** ./src/node-class.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
class Node {
    constructor (value, nextNode) {
        this.value = null;
        this.nextNode = null;
        this.index = null;
    }
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _linked_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list-class */ "./src/linked-list-class.js");




const testRun = new _linked_list_class__WEBPACK_IMPORTED_MODULE_0__.LinkedList;
// console.log(testRun.append());

testRun.append(56);

testRun.prepend(444);

testRun.prepend('nextNode should be 444')

testRun.prepend('nextNode should be text!');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJO0FBQ2hCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDZDQUFJO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDZDQUFJO0FBQzVCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTGlEOzs7QUFHakQsb0JBQW9CLDBEQUFVO0FBQzlCOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9saW5rZWQtbGlzdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL25vZGUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGUtY2xhc3NcIjtcblxuXG5jb25zb2xlLmxvZyhOb2RlKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgTGlua2VkTGlzdCB7XG4gICAgY29uc3RydWN0b3IgKGhlYWQsIHRhaWwsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLmhlYWQgPSBoZWFkO1xuICAgICAgICB0aGlzLnRhaWwgPSB0YWlsO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICBhcHBlbmQoY2hvc2VuVmFsdWUpIHtcbiAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoKTtcbiAgICBuZXdOb2RlLnZhbHVlID0gY2hvc2VuVmFsdWU7XG4gICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4gICAgXG5cbiAgICB0aGlzLnRhaWwgPSBuZXdOb2RlO1xuICAgIHRoaXMudGFpbC5uZXh0Tm9kZSA9IG51bGw7XG4gICAgY29uc29sZS5sb2codGhpcy50YWlsLnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhaWwubmV4dE5vZGUpO1xuXG4gICAgLy8gbmVlZCB0byBzb21laG93IGNoYW5nZSB0aGUgcHJlY2VkaW5nIG5vZGUncyAnbmV4dE5vZGUnIHZhbHVlIGhlcmUgdG8gdGhlXG4gICAgLy8gbmV3bHkgYWRkZWQgbm9kZSdzIHZhbHVlXG5cbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGVuZ3RoKSBcblxuICAgIHJldHVybiB0aGlzLnRhaWxcbiAgICBcbiAgIH1cblxuXG4gICBwcmVwZW5kKGNob3NlblZhbHVlKSB7XG4gICAgbGV0IG9sZEhlYWQ7XG4gICAgLy8gdHJhbnNmZXIgZGF0YSBmcm9tIG9sZCBoZWFkOlxuICAgIGlmICh0aGlzLmhlYWQpIHtcbiAgICAgICAgb2xkSGVhZCA9IHRoaXMuaGVhZDtcbiAgICAgICAgY29uc29sZS5sb2cob2xkSGVhZC5uZXh0Tm9kZSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKG9sZEhlYWQpO1xuICAgIFxuXG4gICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKCk7XG4gICAgbmV3Tm9kZS52YWx1ZSA9IGNob3NlblZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMudGFpbCk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRoaXMuaGVhZC5uZXh0Tm9kZSA9IHRoaXMudGFpbC52YWx1ZVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaGVhZC5uZXh0Tm9kZSA9IG9sZEhlYWQudmFsdWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XG5cbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGVuZ3RoKTtcblxuICAgIHJldHVybiB0aGlzLmhlYWRcblxuICAgfVxufTtcblxuXG5cblxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvciAodmFsdWUsIG5leHROb2RlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pbmRleCA9IG51bGw7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBMaW5rZWRMaXN0IH0gZnJvbSBcIi4vbGlua2VkLWxpc3QtY2xhc3NcIjtcblxuXG5jb25zdCB0ZXN0UnVuID0gbmV3IExpbmtlZExpc3Q7XG4vLyBjb25zb2xlLmxvZyh0ZXN0UnVuLmFwcGVuZCgpKTtcblxudGVzdFJ1bi5hcHBlbmQoNTYpO1xuXG50ZXN0UnVuLnByZXBlbmQoNDQ0KTtcblxudGVzdFJ1bi5wcmVwZW5kKCduZXh0Tm9kZSBzaG91bGQgYmUgNDQ0JylcblxudGVzdFJ1bi5wcmVwZW5kKCduZXh0Tm9kZSBzaG91bGQgYmUgdGV4dCEnKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
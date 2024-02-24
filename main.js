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
/* harmony export */   linkedList2: () => (/* binding */ linkedList2)
/* harmony export */ });
/* harmony import */ var _node_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-class */ "./src/node-class.js");



console.log(_node_class__WEBPACK_IMPORTED_MODULE_0__.Node);

// eslint-disable-next-line import/prefer-default-export
const linkedList2 = function () {
    let length = 0;
    let head = null;
    let tail = null;

    function prepend(val) {
        const newNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__.Node(val, head);
        console.log(newNode);

        if (head === null) {
            head = newNode;
            tail = newNode;
            length += 1
            return {head, tail, length}
        }


        head = newNode;
        length += 1;
        console.log(length);
        return head
    }



    function append(val) {
        const newNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__.Node(val, tail);
        console.log(newNode);

        if (tail === null) {
            tail = newNode;
            head = newNode;
            length += 1;
            
            return {tail, head, length}
        }

        tail = newNode;
        length += 1;
        console.log(length)
        return tail
    }


    function getSize() {
        console.log(length);
        return length
    }

    function returnHead() {
        console.log(head);
        return head
    }

    function returnTail() {
        console.log(tail);
        return tail
    }

    function popTail() {
        // work on getting pointer to work to navigate to last node and pop it
        let pointer = head;
        // remove:
        pointer = tail;
        console.log(pointer);
    }



    // for toString(), maybe use a while loop, iterate through each node
    // until it becomes null


    return { prepend,
        append,
        getSize,
        returnHead,
        returnTail,
        popTail }

}



// eslint-disable-next-line import/prefer-default-export
// export class LinkedList {
//     constructor (head, tail, length) {
//         this.head = head;
//         this.tail = tail;
//         this.length = 0;
//     }

//    append(chosenValue) {
//     // transfer old tail info:
//     let oldTail;
//     if (this.tail !== undefined) {
//         oldTail = this.tail;
//         console.log(oldTail);
//     };

//     this.length += 1;
//     console.log(this.length)

//     const newNode = new Node();
//     newNode.value = chosenValue;
//     console.log(newNode);
//     // set index value of ndoe
//     newNode.index = this.length;

//     this.tail = newNode;
//     this.tail.nextNode = null;
//     console.log(this.tail);
//     // change nextNode of the old tail:
//     if (oldTail !== undefined) {
//         oldTail.nextNode = this.tail.value;
//         console.log(oldTail);
//     }
    

//     return this.tail
    
//    }



//    prepend(chosenValue) {
//     console.log(this.head)
//     let oldHead;
//     // transfer data from old head:
//     if (this.head !== undefined) {
//         oldHead = this.head;
//     }
//     console.log(oldHead);
    

//     const newNode = new Node();
//     newNode.value = chosenValue;
//     // update head:
//     this.head = newNode;

//     console.log(this.tail);

//     if (this.length < 2) {
//         this.head.nextNode = this.tail.value;
//     } else {
//         this.head.nextNode = oldHead.value;
//     }
//     console.log(this.head);

//     this.length += 1;
//     console.log(this.length);

//     return this.head

//    }
// };






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
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
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




const testRun = new _linked_list_class__WEBPACK_IMPORTED_MODULE_0__.linkedList2();
// console.log(testRun.append());

// testRun.append(56);

// testRun.prepend(444);

// testRun.prepend('nextNode should be 444')

// testRun.prepend('nextNode should be text!');

// testRun.append(999);



testRun.prepend(45);
// testRun.returnHead();

testRun.prepend(46);
testRun.returnHead();


// testRun.returnTail();
testRun.append(33);
// testRun.returnTail();

testRun.getSize();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw0QkFBNEIsNkNBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7OztBQUdBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaktBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xrRDs7O0FBR2xELG9CQUFvQiwyREFBVztBQUMvQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9saW5rZWQtbGlzdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL25vZGUtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGUtY2xhc3NcIjtcblxuXG5jb25zb2xlLmxvZyhOb2RlKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBsaW5rZWRMaXN0MiA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBsZXQgaGVhZCA9IG51bGw7XG4gICAgbGV0IHRhaWwgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gcHJlcGVuZCh2YWwpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbCwgaGVhZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgICAgIGlmIChoZWFkID09PSBudWxsKSB7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDFcbiAgICAgICAgICAgIHJldHVybiB7aGVhZCwgdGFpbCwgbGVuZ3RofVxuICAgICAgICB9XG5cblxuICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBoZWFkXG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGFwcGVuZCh2YWwpIHtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbCwgdGFpbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuXG4gICAgICAgIGlmICh0YWlsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7dGFpbCwgaGVhZCwgbGVuZ3RofVxuICAgICAgICB9XG5cbiAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpXG4gICAgICAgIHJldHVybiB0YWlsXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuSGVhZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coaGVhZCk7XG4gICAgICAgIHJldHVybiBoZWFkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuVGFpbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG4gICAgICAgIHJldHVybiB0YWlsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wVGFpbCgpIHtcbiAgICAgICAgLy8gd29yayBvbiBnZXR0aW5nIHBvaW50ZXIgdG8gd29yayB0byBuYXZpZ2F0ZSB0byBsYXN0IG5vZGUgYW5kIHBvcCBpdFxuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG4gICAgICAgIC8vIHJlbW92ZTpcbiAgICAgICAgcG9pbnRlciA9IHRhaWw7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgIH1cblxuXG5cbiAgICAvLyBmb3IgdG9TdHJpbmcoKSwgbWF5YmUgdXNlIGEgd2hpbGUgbG9vcCwgaXRlcmF0ZSB0aHJvdWdoIGVhY2ggbm9kZVxuICAgIC8vIHVudGlsIGl0IGJlY29tZXMgbnVsbFxuXG5cbiAgICByZXR1cm4geyBwcmVwZW5kLFxuICAgICAgICBhcHBlbmQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHJldHVybkhlYWQsXG4gICAgICAgIHJldHVyblRhaWwsXG4gICAgICAgIHBvcFRhaWwgfVxuXG59XG5cblxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuLy8gZXhwb3J0IGNsYXNzIExpbmtlZExpc3Qge1xuLy8gICAgIGNvbnN0cnVjdG9yIChoZWFkLCB0YWlsLCBsZW5ndGgpIHtcbi8vICAgICAgICAgdGhpcy5oZWFkID0gaGVhZDtcbi8vICAgICAgICAgdGhpcy50YWlsID0gdGFpbDtcbi8vICAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuLy8gICAgIH1cblxuLy8gICAgYXBwZW5kKGNob3NlblZhbHVlKSB7XG4vLyAgICAgLy8gdHJhbnNmZXIgb2xkIHRhaWwgaW5mbzpcbi8vICAgICBsZXQgb2xkVGFpbDtcbi8vICAgICBpZiAodGhpcy50YWlsICE9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgb2xkVGFpbCA9IHRoaXMudGFpbDtcbi8vICAgICAgICAgY29uc29sZS5sb2cob2xkVGFpbCk7XG4vLyAgICAgfTtcblxuLy8gICAgIHRoaXMubGVuZ3RoICs9IDE7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5sZW5ndGgpXG5cbi8vICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoKTtcbi8vICAgICBuZXdOb2RlLnZhbHVlID0gY2hvc2VuVmFsdWU7XG4vLyAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4vLyAgICAgLy8gc2V0IGluZGV4IHZhbHVlIG9mIG5kb2Vcbi8vICAgICBuZXdOb2RlLmluZGV4ID0gdGhpcy5sZW5ndGg7XG5cbi8vICAgICB0aGlzLnRhaWwgPSBuZXdOb2RlO1xuLy8gICAgIHRoaXMudGFpbC5uZXh0Tm9kZSA9IG51bGw7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy50YWlsKTtcbi8vICAgICAvLyBjaGFuZ2UgbmV4dE5vZGUgb2YgdGhlIG9sZCB0YWlsOlxuLy8gICAgIGlmIChvbGRUYWlsICE9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgb2xkVGFpbC5uZXh0Tm9kZSA9IHRoaXMudGFpbC52YWx1ZTtcbi8vICAgICAgICAgY29uc29sZS5sb2cob2xkVGFpbCk7XG4vLyAgICAgfVxuICAgIFxuXG4vLyAgICAgcmV0dXJuIHRoaXMudGFpbFxuICAgIFxuLy8gICAgfVxuXG5cblxuLy8gICAgcHJlcGVuZChjaG9zZW5WYWx1ZSkge1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZClcbi8vICAgICBsZXQgb2xkSGVhZDtcbi8vICAgICAvLyB0cmFuc2ZlciBkYXRhIGZyb20gb2xkIGhlYWQ6XG4vLyAgICAgaWYgKHRoaXMuaGVhZCAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgIG9sZEhlYWQgPSB0aGlzLmhlYWQ7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKG9sZEhlYWQpO1xuICAgIFxuXG4vLyAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKCk7XG4vLyAgICAgbmV3Tm9kZS52YWx1ZSA9IGNob3NlblZhbHVlO1xuLy8gICAgIC8vIHVwZGF0ZSBoZWFkOlxuLy8gICAgIHRoaXMuaGVhZCA9IG5ld05vZGU7XG5cbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRhaWwpO1xuXG4vLyAgICAgaWYgKHRoaXMubGVuZ3RoIDwgMikge1xuLy8gICAgICAgICB0aGlzLmhlYWQubmV4dE5vZGUgPSB0aGlzLnRhaWwudmFsdWU7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdGhpcy5oZWFkLm5leHROb2RlID0gb2xkSGVhZC52YWx1ZTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5oZWFkKTtcblxuLy8gICAgIHRoaXMubGVuZ3RoICs9IDE7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5sZW5ndGgpO1xuXG4vLyAgICAgcmV0dXJuIHRoaXMuaGVhZFxuXG4vLyAgICB9XG4vLyB9O1xuXG5cblxuXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yICh2YWx1ZSwgbmV4dE5vZGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgbGlua2VkTGlzdDIgfSBmcm9tIFwiLi9saW5rZWQtbGlzdC1jbGFzc1wiO1xuXG5cbmNvbnN0IHRlc3RSdW4gPSBuZXcgbGlua2VkTGlzdDIoKTtcbi8vIGNvbnNvbGUubG9nKHRlc3RSdW4uYXBwZW5kKCkpO1xuXG4vLyB0ZXN0UnVuLmFwcGVuZCg1Nik7XG5cbi8vIHRlc3RSdW4ucHJlcGVuZCg0NDQpO1xuXG4vLyB0ZXN0UnVuLnByZXBlbmQoJ25leHROb2RlIHNob3VsZCBiZSA0NDQnKVxuXG4vLyB0ZXN0UnVuLnByZXBlbmQoJ25leHROb2RlIHNob3VsZCBiZSB0ZXh0IScpO1xuXG4vLyB0ZXN0UnVuLmFwcGVuZCg5OTkpO1xuXG5cblxudGVzdFJ1bi5wcmVwZW5kKDQ1KTtcbi8vIHRlc3RSdW4ucmV0dXJuSGVhZCgpO1xuXG50ZXN0UnVuLnByZXBlbmQoNDYpO1xudGVzdFJ1bi5yZXR1cm5IZWFkKCk7XG5cblxuLy8gdGVzdFJ1bi5yZXR1cm5UYWlsKCk7XG50ZXN0UnVuLmFwcGVuZCgzMyk7XG4vLyB0ZXN0UnVuLnJldHVyblRhaWwoKTtcblxudGVzdFJ1bi5nZXRTaXplKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
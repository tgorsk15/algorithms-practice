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
        console.log(tail);
        const newNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__.Node(val, tail);
        console.log(newNode);
        tail.nextNode = newNode;

        if (tail === null) {
            tail = newNode;
            head = newNode;
            length += 1;
            
            return {tail, head, length}
        }

        tail = newNode;
        tail.nextNode = null;
        length += 1;
        console.log(length)
        console.log(tail);
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

    function traverseList() {
        let pointer = head;

        while (pointer !== null) {
            console.log(pointer);
            pointer = pointer.nextNode;
        }
    }


    function popTail() {
        let pointer = head;
        console.log(tail);

        while (pointer.nextNode !== tail) {
            console.log(pointer.nextNode)
            pointer = pointer.nextNode;
        };

        // delete memory of tail:
        pointer.nextNode = null;
        
        // make new tail:
        tail = pointer;
        console.log(tail);

        // shorten length
        length -= 1;

        return tail

    }


    function atIndex(index) {
        let counter = 0;
        let pointer = head;

        // runs until a match is found or end of list is reached
        while (counter !== index) {
            pointer =pointer.nextNode;
            counter += 1;

            if (pointer === null) {
                console.log('not found');
                return 
            }
        }

        console.log(pointer);
        return pointer

    }

    



    // for toString(), maybe use a while loop, iterate through each node
    // until it becomes null


    return { prepend,
        append,
        getSize,
        returnHead,
        returnTail,
        popTail,
        traverseList, 
        atIndex }

}









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


testRun.prepend(46);
testRun.returnHead();


// testRun.returnTail();
testRun.append(33);
// testRun.returnTail();

testRun.append(69);
testRun.append('last one for now!');

testRun.getSize();
testRun.popTail();
testRun.getSize();

// testRun.getSize();
// testRun.popTail();
// testRun.getSize();

testRun.traverseList();
// testRun.returnTail();

testRun.atIndex(6);
testRun.atIndex(1)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7QUFDQTs7O0FBR0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xrRDs7O0FBR2xELG9CQUFvQiwyREFBVztBQUMvQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbGlua2VkLWxpc3QtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLWNsYXNzXCI7XG5cblxuY29uc29sZS5sb2coTm9kZSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgbGlua2VkTGlzdDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQodmFsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWwsIGhlYWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxXG4gICAgICAgICAgICByZXR1cm4ge2hlYWQsIHRhaWwsIGxlbmd0aH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gaGVhZFxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBhcHBlbmQodmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhaWwpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCB0YWlsKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4gICAgICAgIHRhaWwubmV4dE5vZGUgPSBuZXdOb2RlO1xuXG4gICAgICAgIGlmICh0YWlsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7dGFpbCwgaGVhZCwgbGVuZ3RofVxuICAgICAgICB9XG5cbiAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIHRhaWwubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5IZWFkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkKTtcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5UYWlsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmF2ZXJzZUxpc3QoKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcG9wVGFpbCgpIHtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci5uZXh0Tm9kZSAhPT0gdGFpbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlci5uZXh0Tm9kZSlcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGRlbGV0ZSBtZW1vcnkgb2YgdGFpbDpcbiAgICAgICAgcG9pbnRlci5uZXh0Tm9kZSA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyBtYWtlIG5ldyB0YWlsOlxuICAgICAgICB0YWlsID0gcG9pbnRlcjtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG5cbiAgICAgICAgLy8gc2hvcnRlbiBsZW5ndGhcbiAgICAgICAgbGVuZ3RoIC09IDE7XG5cbiAgICAgICAgcmV0dXJuIHRhaWxcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYXRJbmRleChpbmRleCkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICAvLyBydW5zIHVudGlsIGEgbWF0Y2ggaXMgZm91bmQgb3IgZW5kIG9mIGxpc3QgaXMgcmVhY2hlZFxuICAgICAgICB3aGlsZSAoY291bnRlciAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPXBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG5cbiAgICAgICAgICAgIGlmIChwb2ludGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgICAgICByZXR1cm4gcG9pbnRlclxuXG4gICAgfVxuXG4gICAgXG5cblxuXG4gICAgLy8gZm9yIHRvU3RyaW5nKCksIG1heWJlIHVzZSBhIHdoaWxlIGxvb3AsIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIG5vZGVcbiAgICAvLyB1bnRpbCBpdCBiZWNvbWVzIG51bGxcblxuXG4gICAgcmV0dXJuIHsgcHJlcGVuZCxcbiAgICAgICAgYXBwZW5kLFxuICAgICAgICBnZXRTaXplLFxuICAgICAgICByZXR1cm5IZWFkLFxuICAgICAgICByZXR1cm5UYWlsLFxuICAgICAgICBwb3BUYWlsLFxuICAgICAgICB0cmF2ZXJzZUxpc3QsIFxuICAgICAgICBhdEluZGV4IH1cblxufVxuXG5cblxuXG5cblxuXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yICh2YWx1ZSwgbmV4dE5vZGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgbGlua2VkTGlzdDIgfSBmcm9tIFwiLi9saW5rZWQtbGlzdC1jbGFzc1wiO1xuXG5cbmNvbnN0IHRlc3RSdW4gPSBuZXcgbGlua2VkTGlzdDIoKTtcbi8vIGNvbnNvbGUubG9nKHRlc3RSdW4uYXBwZW5kKCkpO1xuXG4vLyB0ZXN0UnVuLmFwcGVuZCg1Nik7XG5cbi8vIHRlc3RSdW4ucHJlcGVuZCg0NDQpO1xuXG4vLyB0ZXN0UnVuLnByZXBlbmQoJ25leHROb2RlIHNob3VsZCBiZSA0NDQnKVxuXG4vLyB0ZXN0UnVuLnByZXBlbmQoJ25leHROb2RlIHNob3VsZCBiZSB0ZXh0IScpO1xuXG4vLyB0ZXN0UnVuLmFwcGVuZCg5OTkpO1xuXG5cblxudGVzdFJ1bi5wcmVwZW5kKDQ1KTtcblxuXG50ZXN0UnVuLnByZXBlbmQoNDYpO1xudGVzdFJ1bi5yZXR1cm5IZWFkKCk7XG5cblxuLy8gdGVzdFJ1bi5yZXR1cm5UYWlsKCk7XG50ZXN0UnVuLmFwcGVuZCgzMyk7XG4vLyB0ZXN0UnVuLnJldHVyblRhaWwoKTtcblxudGVzdFJ1bi5hcHBlbmQoNjkpO1xudGVzdFJ1bi5hcHBlbmQoJ2xhc3Qgb25lIGZvciBub3chJyk7XG5cbnRlc3RSdW4uZ2V0U2l6ZSgpO1xudGVzdFJ1bi5wb3BUYWlsKCk7XG50ZXN0UnVuLmdldFNpemUoKTtcblxuLy8gdGVzdFJ1bi5nZXRTaXplKCk7XG4vLyB0ZXN0UnVuLnBvcFRhaWwoKTtcbi8vIHRlc3RSdW4uZ2V0U2l6ZSgpO1xuXG50ZXN0UnVuLnRyYXZlcnNlTGlzdCgpO1xuLy8gdGVzdFJ1bi5yZXR1cm5UYWlsKCk7XG5cbnRlc3RSdW4uYXRJbmRleCg2KTtcbnRlc3RSdW4uYXRJbmRleCgxKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
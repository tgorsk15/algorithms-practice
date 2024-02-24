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
            pointer = pointer.nextNode;

            if (pointer === null) {
                console.log('not found');
                return 
            }
            counter += 1;
        }

        console.log(pointer);
        return pointer

    }


    function doesContain(val) {
        let pointer = head;

        while (pointer.value !== val) {
            pointer = pointer.nextNode
            if (pointer === null) {
                console.log('value not found');
                return false
            }
        };
        console.log('found!');
        return true

    }

    function find(val) {
        // set up another index counter, return at end
        let index = 0;
        let pointer = head;

        while (pointer.value !== val) {
            pointer = pointer.nextNode;

            if (pointer === null) {
                console.log('value not in list');
                return
            }
            index += 1

        }

        console.log(index);
        return index
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
        atIndex,
        doesContain,
        find }

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
testRun.append('hey there');
testRun.append(69);
testRun.append('last one gets deleted');

testRun.getSize();
testRun.popTail();
testRun.getSize();

// testRun.getSize();
// testRun.popTail();
// testRun.getSize();

testRun.traverseList();
// testRun.returnTail();

testRun.atIndex(6);
testRun.atIndex(1);


// testRun.doesContain('hi');
// testRun.doesContain(69);
// testRun.doesContain('hey there')

testRun.find(69);
testRun.find(72);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTs7O0FBR0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xMQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMa0Q7OztBQUdsRCxvQkFBb0IsMkRBQVc7QUFDL0I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbGlua2VkLWxpc3QtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLWNsYXNzXCI7XG5cblxuY29uc29sZS5sb2coTm9kZSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgbGlua2VkTGlzdDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQodmFsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWwsIGhlYWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxXG4gICAgICAgICAgICByZXR1cm4ge2hlYWQsIHRhaWwsIGxlbmd0aH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gaGVhZFxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBhcHBlbmQodmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhaWwpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCB0YWlsKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4gICAgICAgIHRhaWwubmV4dE5vZGUgPSBuZXdOb2RlO1xuXG4gICAgICAgIGlmICh0YWlsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7dGFpbCwgaGVhZCwgbGVuZ3RofVxuICAgICAgICB9XG5cbiAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIHRhaWwubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5IZWFkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkKTtcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5UYWlsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmF2ZXJzZUxpc3QoKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcG9wVGFpbCgpIHtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci5uZXh0Tm9kZSAhPT0gdGFpbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlci5uZXh0Tm9kZSlcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGRlbGV0ZSBtZW1vcnkgb2YgdGFpbDpcbiAgICAgICAgcG9pbnRlci5uZXh0Tm9kZSA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyBtYWtlIG5ldyB0YWlsOlxuICAgICAgICB0YWlsID0gcG9pbnRlcjtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG5cbiAgICAgICAgLy8gc2hvcnRlbiBsZW5ndGhcbiAgICAgICAgbGVuZ3RoIC09IDE7XG5cbiAgICAgICAgcmV0dXJuIHRhaWxcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYXRJbmRleChpbmRleCkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICAvLyBydW5zIHVudGlsIGEgbWF0Y2ggaXMgZm91bmQgb3IgZW5kIG9mIGxpc3QgaXMgcmVhY2hlZFxuICAgICAgICB3aGlsZSAoY291bnRlciAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuXG4gICAgICAgICAgICBpZiAocG9pbnRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyKTtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXJcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZG9lc0NvbnRhaW4odmFsKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZVxuICAgICAgICAgICAgaWYgKHBvaW50ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCEnKTtcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQodmFsKSB7XG4gICAgICAgIC8vIHNldCB1cCBhbm90aGVyIGluZGV4IGNvdW50ZXIsIHJldHVybiBhdCBlbmRcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuXG4gICAgICAgIHdoaWxlIChwb2ludGVyLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuXG4gICAgICAgICAgICBpZiAocG9pbnRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBub3QgaW4gbGlzdCcpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuICAgIFxuXG5cblxuICAgIC8vIGZvciB0b1N0cmluZygpLCBtYXliZSB1c2UgYSB3aGlsZSBsb29wLCBpdGVyYXRlIHRocm91Z2ggZWFjaCBub2RlXG4gICAgLy8gdW50aWwgaXQgYmVjb21lcyBudWxsXG5cblxuICAgIHJldHVybiB7IHByZXBlbmQsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgcmV0dXJuSGVhZCxcbiAgICAgICAgcmV0dXJuVGFpbCxcbiAgICAgICAgcG9wVGFpbCxcbiAgICAgICAgdHJhdmVyc2VMaXN0LCBcbiAgICAgICAgYXRJbmRleCxcbiAgICAgICAgZG9lc0NvbnRhaW4sXG4gICAgICAgIGZpbmQgfVxuXG59XG5cblxuXG5cblxuXG5cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBsaW5rZWRMaXN0MiB9IGZyb20gXCIuL2xpbmtlZC1saXN0LWNsYXNzXCI7XG5cblxuY29uc3QgdGVzdFJ1biA9IG5ldyBsaW5rZWRMaXN0MigpO1xuLy8gY29uc29sZS5sb2codGVzdFJ1bi5hcHBlbmQoKSk7XG5cbi8vIHRlc3RSdW4uYXBwZW5kKDU2KTtcblxuLy8gdGVzdFJ1bi5wcmVwZW5kKDQ0NCk7XG5cbi8vIHRlc3RSdW4ucHJlcGVuZCgnbmV4dE5vZGUgc2hvdWxkIGJlIDQ0NCcpXG5cbi8vIHRlc3RSdW4ucHJlcGVuZCgnbmV4dE5vZGUgc2hvdWxkIGJlIHRleHQhJyk7XG5cbi8vIHRlc3RSdW4uYXBwZW5kKDk5OSk7XG5cblxuXG50ZXN0UnVuLnByZXBlbmQoNDUpO1xuXG5cbnRlc3RSdW4ucHJlcGVuZCg0Nik7XG50ZXN0UnVuLnJldHVybkhlYWQoKTtcblxuXG4vLyB0ZXN0UnVuLnJldHVyblRhaWwoKTtcbnRlc3RSdW4uYXBwZW5kKDMzKTtcbi8vIHRlc3RSdW4ucmV0dXJuVGFpbCgpO1xudGVzdFJ1bi5hcHBlbmQoJ2hleSB0aGVyZScpO1xudGVzdFJ1bi5hcHBlbmQoNjkpO1xudGVzdFJ1bi5hcHBlbmQoJ2xhc3Qgb25lIGdldHMgZGVsZXRlZCcpO1xuXG50ZXN0UnVuLmdldFNpemUoKTtcbnRlc3RSdW4ucG9wVGFpbCgpO1xudGVzdFJ1bi5nZXRTaXplKCk7XG5cbi8vIHRlc3RSdW4uZ2V0U2l6ZSgpO1xuLy8gdGVzdFJ1bi5wb3BUYWlsKCk7XG4vLyB0ZXN0UnVuLmdldFNpemUoKTtcblxudGVzdFJ1bi50cmF2ZXJzZUxpc3QoKTtcbi8vIHRlc3RSdW4ucmV0dXJuVGFpbCgpO1xuXG50ZXN0UnVuLmF0SW5kZXgoNik7XG50ZXN0UnVuLmF0SW5kZXgoMSk7XG5cblxuLy8gdGVzdFJ1bi5kb2VzQ29udGFpbignaGknKTtcbi8vIHRlc3RSdW4uZG9lc0NvbnRhaW4oNjkpO1xuLy8gdGVzdFJ1bi5kb2VzQ29udGFpbignaGV5IHRoZXJlJylcblxudGVzdFJ1bi5maW5kKDY5KTtcbnRlc3RSdW4uZmluZCg3Mik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
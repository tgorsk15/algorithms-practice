/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linked-list.js":
/*!****************************!*\
  !*** ./src/linked-list.js ***!
  \****************************/
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


    function printList() {
        let pointer = head;
        let listString = ``;

        while (pointer !== null) {
            listString += `${pointer.value} -> `;
            pointer = pointer.nextNode;
        }
        console.log(listString);
        return listString

    }


    function insertAt(val, index) {
        if (index < 0) {
            console.log('index needs to be above 0');
            return
        // eslint-disable-next-line no-else-return
        } else if (index === 0) {
            prepend(val);
        } else if (index === length) {
            append(val)
        } else if (index > length) {
            console.log('list not long enough. Try another index');
            return
        }

        let pointer = head;
        let indexCounter = 0;

        while (indexCounter + 1 !== index) {
            pointer = pointer.nextNode;
            indexCounter += 1;          
        };

        const afterPointer = pointer.nextNode;
        console.log(afterPointer);

        const newNode = new _node_class__WEBPACK_IMPORTED_MODULE_0__.Node(val, afterPointer);
        pointer.nextNode = newNode;
        console.log(pointer);


        console.log(pointer.nextNode);

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
        find,
        printList,
        insertAt }

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
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list */ "./src/linked-list.js");




const testRun = new _linked_list__WEBPACK_IMPORTED_MODULE_0__.linkedList2();


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

testRun.traverseList();


testRun.atIndex(6);
testRun.atIndex(1);

// test functions:
testRun.doesContain('hi');
testRun.doesContain('hey there')
testRun.find(69);
testRun.printList()


testRun.insertAt(66, 10);
testRun.insertAt(100, 3);

testRun.insertAt(200, 4);
testRun.traverseList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOzs7QUFHQTs7QUFFQTs7OztBQUlBO0FBQ0E7OztBQUdBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk9BO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0w0Qzs7O0FBRzVDLG9CQUFvQixxREFBVzs7O0FBRy9COzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbGlua2VkLWxpc3QuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLWNsYXNzXCI7XG5cblxuY29uc29sZS5sb2coTm9kZSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgbGlua2VkTGlzdDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQodmFsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWwsIGhlYWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxXG4gICAgICAgICAgICByZXR1cm4ge2hlYWQsIHRhaWwsIGxlbmd0aH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gaGVhZFxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBhcHBlbmQodmFsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhaWwpO1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCB0YWlsKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG4gICAgICAgIHRhaWwubmV4dE5vZGUgPSBuZXdOb2RlO1xuXG4gICAgICAgIGlmICh0YWlsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7dGFpbCwgaGVhZCwgbGVuZ3RofVxuICAgICAgICB9XG5cbiAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgIHRhaWwubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5IZWFkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkKTtcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5UYWlsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmF2ZXJzZUxpc3QoKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcG9wVGFpbCgpIHtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci5uZXh0Tm9kZSAhPT0gdGFpbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlci5uZXh0Tm9kZSlcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGRlbGV0ZSBtZW1vcnkgb2YgdGFpbDpcbiAgICAgICAgcG9pbnRlci5uZXh0Tm9kZSA9IG51bGw7XG4gICAgICAgIFxuICAgICAgICAvLyBtYWtlIG5ldyB0YWlsOlxuICAgICAgICB0YWlsID0gcG9pbnRlcjtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG5cbiAgICAgICAgLy8gc2hvcnRlbiBsZW5ndGhcbiAgICAgICAgbGVuZ3RoIC09IDE7XG5cbiAgICAgICAgcmV0dXJuIHRhaWxcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gYXRJbmRleChpbmRleCkge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICAvLyBydW5zIHVudGlsIGEgbWF0Y2ggaXMgZm91bmQgb3IgZW5kIG9mIGxpc3QgaXMgcmVhY2hlZFxuICAgICAgICB3aGlsZSAoY291bnRlciAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuXG4gICAgICAgICAgICBpZiAocG9pbnRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgZm91bmQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyKTtcbiAgICAgICAgcmV0dXJuIHBvaW50ZXJcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZG9lc0NvbnRhaW4odmFsKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZVxuICAgICAgICAgICAgaWYgKHBvaW50ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3VuZCEnKTtcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbmQodmFsKSB7XG4gICAgICAgIC8vIHNldCB1cCBhbm90aGVyIGluZGV4IGNvdW50ZXIsIHJldHVybiBhdCBlbmRcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuXG4gICAgICAgIHdoaWxlIChwb2ludGVyLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuXG4gICAgICAgICAgICBpZiAocG9pbnRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWx1ZSBub3QgaW4gbGlzdCcpO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXggKz0gMVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIHJldHVybiBpbmRleFxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcHJpbnRMaXN0KCkge1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG4gICAgICAgIGxldCBsaXN0U3RyaW5nID0gYGA7XG5cbiAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RTdHJpbmcgKz0gYCR7cG9pbnRlci52YWx1ZX0gLT4gYDtcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3RTdHJpbmcpO1xuICAgICAgICByZXR1cm4gbGlzdFN0cmluZ1xuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBpbnNlcnRBdCh2YWwsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmRleCBuZWVkcyB0byBiZSBhYm92ZSAwJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVsc2UtcmV0dXJuXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHByZXBlbmQodmFsKTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICBhcHBlbmQodmFsKVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbGlzdCBub3QgbG9uZyBlbm91Z2guIFRyeSBhbm90aGVyIGluZGV4Jyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcbiAgICAgICAgbGV0IGluZGV4Q291bnRlciA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGluZGV4Q291bnRlciArIDEgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgICAgIGluZGV4Q291bnRlciArPSAxOyAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhZnRlclBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICBjb25zb2xlLmxvZyhhZnRlclBvaW50ZXIpO1xuXG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWwsIGFmdGVyUG9pbnRlcik7XG4gICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBuZXdOb2RlO1xuICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyKTtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIubmV4dE5vZGUpO1xuXG4gICAgfVxuXG5cblxuICAgIC8vIGZvciB0b1N0cmluZygpLCBtYXliZSB1c2UgYSB3aGlsZSBsb29wLCBpdGVyYXRlIHRocm91Z2ggZWFjaCBub2RlXG4gICAgLy8gdW50aWwgaXQgYmVjb21lcyBudWxsXG5cblxuICAgIHJldHVybiB7IHByZXBlbmQsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgcmV0dXJuSGVhZCxcbiAgICAgICAgcmV0dXJuVGFpbCxcbiAgICAgICAgcG9wVGFpbCxcbiAgICAgICAgdHJhdmVyc2VMaXN0LCBcbiAgICAgICAgYXRJbmRleCxcbiAgICAgICAgZG9lc0NvbnRhaW4sXG4gICAgICAgIGZpbmQsXG4gICAgICAgIHByaW50TGlzdCxcbiAgICAgICAgaW5zZXJ0QXQgfVxuXG59XG5cblxuXG5cblxuXG5cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBsaW5rZWRMaXN0MiB9IGZyb20gXCIuL2xpbmtlZC1saXN0XCI7XG5cblxuY29uc3QgdGVzdFJ1biA9IG5ldyBsaW5rZWRMaXN0MigpO1xuXG5cbnRlc3RSdW4ucHJlcGVuZCg0NSk7XG5cblxudGVzdFJ1bi5wcmVwZW5kKDQ2KTtcbnRlc3RSdW4ucmV0dXJuSGVhZCgpO1xuXG5cbi8vIHRlc3RSdW4ucmV0dXJuVGFpbCgpO1xudGVzdFJ1bi5hcHBlbmQoMzMpO1xuLy8gdGVzdFJ1bi5yZXR1cm5UYWlsKCk7XG50ZXN0UnVuLmFwcGVuZCgnaGV5IHRoZXJlJyk7XG50ZXN0UnVuLmFwcGVuZCg2OSk7XG50ZXN0UnVuLmFwcGVuZCgnbGFzdCBvbmUgZ2V0cyBkZWxldGVkJyk7XG5cbnRlc3RSdW4uZ2V0U2l6ZSgpO1xudGVzdFJ1bi5wb3BUYWlsKCk7XG50ZXN0UnVuLmdldFNpemUoKTtcblxudGVzdFJ1bi50cmF2ZXJzZUxpc3QoKTtcblxuXG50ZXN0UnVuLmF0SW5kZXgoNik7XG50ZXN0UnVuLmF0SW5kZXgoMSk7XG5cbi8vIHRlc3QgZnVuY3Rpb25zOlxudGVzdFJ1bi5kb2VzQ29udGFpbignaGknKTtcbnRlc3RSdW4uZG9lc0NvbnRhaW4oJ2hleSB0aGVyZScpXG50ZXN0UnVuLmZpbmQoNjkpO1xudGVzdFJ1bi5wcmludExpc3QoKVxuXG5cbnRlc3RSdW4uaW5zZXJ0QXQoNjYsIDEwKTtcbnRlc3RSdW4uaW5zZXJ0QXQoMTAwLCAzKTtcblxudGVzdFJ1bi5pbnNlcnRBdCgyMDAsIDQpO1xudGVzdFJ1bi50cmF2ZXJzZUxpc3QoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
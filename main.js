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
/* harmony import */ var _linked_list_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linked-list-class */ "./src/linked-list-class.js");




const testRun = new _linked_list_class__WEBPACK_IMPORTED_MODULE_0__.linkedList2();


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
// testRun.returnTail();

testRun.atIndex(6);
testRun.atIndex(1);


// testRun.doesContain('hi');
// testRun.doesContain(69);
// testRun.doesContain('hey there')

// testRun.find(69);

// testRun.printList()


testRun.insertAt(66, 10);
testRun.insertAt(100, 3);

testRun.insertAt(200, 4);
testRun.traverseList();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsZUFBZTtBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOzs7QUFHQTs7QUFFQTs7OztBQUlBO0FBQ0E7OztBQUdBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk9BO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xrRDs7O0FBR2xELG9CQUFvQiwyREFBVzs7O0FBRy9COzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2xpbmtlZC1saXN0LWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbm9kZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZS1jbGFzc1wiO1xuXG5cbmNvbnNvbGUubG9nKE5vZGUpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGxpbmtlZExpc3QyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgdGFpbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBwcmVwZW5kKHZhbCkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCBoZWFkKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG5cbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICBsZW5ndGggKz0gMVxuICAgICAgICAgICAgcmV0dXJuIHtoZWFkLCB0YWlsLCBsZW5ndGh9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gYXBwZW5kKHZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbCwgdGFpbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuICAgICAgICB0YWlsLm5leHROb2RlID0gbmV3Tm9kZTtcblxuICAgICAgICBpZiAodGFpbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge3RhaWwsIGhlYWQsIGxlbmd0aH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB0YWlsLm5leHROb2RlID0gbnVsbDtcbiAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG4gICAgICAgIHJldHVybiB0YWlsXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuSGVhZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coaGVhZCk7XG4gICAgICAgIHJldHVybiBoZWFkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuVGFpbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG4gICAgICAgIHJldHVybiB0YWlsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhdmVyc2VMaXN0KCkge1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG5cbiAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBvcFRhaWwoKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG5cbiAgICAgICAgd2hpbGUgKHBvaW50ZXIubmV4dE5vZGUgIT09IHRhaWwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIubmV4dE5vZGUpXG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBkZWxldGUgbWVtb3J5IG9mIHRhaWw6XG4gICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICBcbiAgICAgICAgLy8gbWFrZSBuZXcgdGFpbDpcbiAgICAgICAgdGFpbCA9IHBvaW50ZXI7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhaWwpO1xuXG4gICAgICAgIC8vIHNob3J0ZW4gbGVuZ3RoXG4gICAgICAgIGxlbmd0aCAtPSAxO1xuXG4gICAgICAgIHJldHVybiB0YWlsXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG5cbiAgICAgICAgLy8gcnVucyB1bnRpbCBhIG1hdGNoIGlzIGZvdW5kIG9yIGVuZCBvZiBsaXN0IGlzIHJlYWNoZWRcbiAgICAgICAgd2hpbGUgKGNvdW50ZXIgIT09IGluZGV4KSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcblxuICAgICAgICAgICAgaWYgKHBvaW50ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY291bnRlciArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgIHJldHVybiBwb2ludGVyXG5cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGRvZXNDb250YWluKHZhbCkge1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG5cbiAgICAgICAgd2hpbGUgKHBvaW50ZXIudmFsdWUgIT09IHZhbCkge1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGVcbiAgICAgICAgICAgIGlmIChwb2ludGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbHVlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZygnZm91bmQhJyk7XG4gICAgICAgIHJldHVybiB0cnVlXG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaW5kKHZhbCkge1xuICAgICAgICAvLyBzZXQgdXAgYW5vdGhlciBpbmRleCBjb3VudGVyLCByZXR1cm4gYXQgZW5kXG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcblxuICAgICAgICAgICAgaWYgKHBvaW50ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsdWUgbm90IGluIGxpc3QnKTtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4ICs9IDFcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICByZXR1cm4gaW5kZXhcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHByaW50TGlzdCgpIHtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBoZWFkO1xuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IGBgO1xuXG4gICAgICAgIHdoaWxlIChwb2ludGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0U3RyaW5nICs9IGAke3BvaW50ZXIudmFsdWV9IC0+IGA7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhsaXN0U3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIGxpc3RTdHJpbmdcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gaW5zZXJ0QXQodmFsLCBpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW5kZXggbmVlZHMgdG8gYmUgYWJvdmUgMCcpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbHNlLXJldHVyblxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBwcmVwZW5kKHZhbCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgYXBwZW5kKHZhbClcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IGxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3Qgbm90IGxvbmcgZW5vdWdoLiBUcnkgYW5vdGhlciBpbmRleCcpO1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG4gICAgICAgIGxldCBpbmRleENvdW50ZXIgPSAwO1xuXG4gICAgICAgIHdoaWxlIChpbmRleENvdW50ZXIgKyAxICE9PSBpbmRleCkge1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgICAgICBpbmRleENvdW50ZXIgKz0gMTsgICAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYWZ0ZXJQb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgY29uc29sZS5sb2coYWZ0ZXJQb2ludGVyKTtcblxuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCBhZnRlclBvaW50ZXIpO1xuICAgICAgICBwb2ludGVyLm5leHROb2RlID0gbmV3Tm9kZTtcbiAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyLm5leHROb2RlKTtcblxuICAgIH1cblxuXG5cbiAgICAvLyBmb3IgdG9TdHJpbmcoKSwgbWF5YmUgdXNlIGEgd2hpbGUgbG9vcCwgaXRlcmF0ZSB0aHJvdWdoIGVhY2ggbm9kZVxuICAgIC8vIHVudGlsIGl0IGJlY29tZXMgbnVsbFxuXG5cbiAgICByZXR1cm4geyBwcmVwZW5kLFxuICAgICAgICBhcHBlbmQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHJldHVybkhlYWQsXG4gICAgICAgIHJldHVyblRhaWwsXG4gICAgICAgIHBvcFRhaWwsXG4gICAgICAgIHRyYXZlcnNlTGlzdCwgXG4gICAgICAgIGF0SW5kZXgsXG4gICAgICAgIGRvZXNDb250YWluLFxuICAgICAgICBmaW5kLFxuICAgICAgICBwcmludExpc3QsXG4gICAgICAgIGluc2VydEF0IH1cblxufVxuXG5cblxuXG5cblxuXG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yICh2YWx1ZSwgbmV4dE5vZGUgPSBudWxsKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXh0Tm9kZSA9IG5leHROb2RlO1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgbGlua2VkTGlzdDIgfSBmcm9tIFwiLi9saW5rZWQtbGlzdC1jbGFzc1wiO1xuXG5cbmNvbnN0IHRlc3RSdW4gPSBuZXcgbGlua2VkTGlzdDIoKTtcblxuXG50ZXN0UnVuLnByZXBlbmQoNDUpO1xuXG5cbnRlc3RSdW4ucHJlcGVuZCg0Nik7XG50ZXN0UnVuLnJldHVybkhlYWQoKTtcblxuXG4vLyB0ZXN0UnVuLnJldHVyblRhaWwoKTtcbnRlc3RSdW4uYXBwZW5kKDMzKTtcbi8vIHRlc3RSdW4ucmV0dXJuVGFpbCgpO1xudGVzdFJ1bi5hcHBlbmQoJ2hleSB0aGVyZScpO1xudGVzdFJ1bi5hcHBlbmQoNjkpO1xudGVzdFJ1bi5hcHBlbmQoJ2xhc3Qgb25lIGdldHMgZGVsZXRlZCcpO1xuXG50ZXN0UnVuLmdldFNpemUoKTtcbnRlc3RSdW4ucG9wVGFpbCgpO1xudGVzdFJ1bi5nZXRTaXplKCk7XG5cbnRlc3RSdW4udHJhdmVyc2VMaXN0KCk7XG4vLyB0ZXN0UnVuLnJldHVyblRhaWwoKTtcblxudGVzdFJ1bi5hdEluZGV4KDYpO1xudGVzdFJ1bi5hdEluZGV4KDEpO1xuXG5cbi8vIHRlc3RSdW4uZG9lc0NvbnRhaW4oJ2hpJyk7XG4vLyB0ZXN0UnVuLmRvZXNDb250YWluKDY5KTtcbi8vIHRlc3RSdW4uZG9lc0NvbnRhaW4oJ2hleSB0aGVyZScpXG5cbi8vIHRlc3RSdW4uZmluZCg2OSk7XG5cbi8vIHRlc3RSdW4ucHJpbnRMaXN0KClcblxuXG50ZXN0UnVuLmluc2VydEF0KDY2LCAxMCk7XG50ZXN0UnVuLmluc2VydEF0KDEwMCwgMyk7XG5cbnRlc3RSdW4uaW5zZXJ0QXQoMjAwLCA0KTtcbnRlc3RSdW4udHJhdmVyc2VMaXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
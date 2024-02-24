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
        // work on getting pointer to work to navigate to last node and pop it
        // have to reset new tail's nextNode to null after the old tail
        // is popped
        let pointer = head;
        console.log(pointer);
        console.log(tail);

        while (pointer.nextNode !== tail) {
            console.log(pointer.nextNode)
            pointer = pointer.nextNode;
        };

        pointer.nextNode = null;
        console.log(tail);
        
        // make new tail:
        tail = pointer;
        console.log(tail);
        return tail

    }

    



    // for toString(), maybe use a while loop, iterate through each node
    // until it becomes null


    return { prepend,
        append,
        getSize,
        returnHead,
        returnTail,
        popTail,
        traverseList }

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


testRun.prepend(46);
testRun.returnHead();


// testRun.returnTail();
testRun.append(33);
testRun.returnTail();

testRun.append(69);

testRun.getSize();


testRun.popTail()

testRun.traverseList();
testRun.returnTail();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBOzs7QUFHQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDak1BO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xrRDs7O0FBR2xELG9CQUFvQiwyREFBVztBQUMvQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2xpbmtlZC1saXN0LWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbm9kZS1jbGFzcy5qcyIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZS1jbGFzc1wiO1xuXG5cbmNvbnNvbGUubG9nKE5vZGUpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGNvbnN0IGxpbmtlZExpc3QyID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGxldCBoZWFkID0gbnVsbDtcbiAgICBsZXQgdGFpbCA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBwcmVwZW5kKHZhbCkge1xuICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsLCBoZWFkKTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3Tm9kZSk7XG5cbiAgICAgICAgaWYgKGhlYWQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICBsZW5ndGggKz0gMVxuICAgICAgICAgICAgcmV0dXJuIHtoZWFkLCB0YWlsLCBsZW5ndGh9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGhlYWQgPSBuZXdOb2RlO1xuICAgICAgICBsZW5ndGggKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2cobGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gYXBwZW5kKHZhbCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbCwgdGFpbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuICAgICAgICB0YWlsLm5leHROb2RlID0gbmV3Tm9kZTtcblxuICAgICAgICBpZiAodGFpbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge3RhaWwsIGhlYWQsIGxlbmd0aH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB0YWlsLm5leHROb2RlID0gbnVsbDtcbiAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG4gICAgICAgIHJldHVybiB0YWlsXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gbGVuZ3RoXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuSGVhZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coaGVhZCk7XG4gICAgICAgIHJldHVybiBoZWFkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuVGFpbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGFpbCk7XG4gICAgICAgIHJldHVybiB0YWlsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhdmVyc2VMaXN0KCkge1xuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG5cbiAgICAgICAgd2hpbGUgKHBvaW50ZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgICAgICAgICAgcG9pbnRlciA9IHBvaW50ZXIubmV4dE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHBvcFRhaWwoKSB7XG4gICAgICAgIC8vIHdvcmsgb24gZ2V0dGluZyBwb2ludGVyIHRvIHdvcmsgdG8gbmF2aWdhdGUgdG8gbGFzdCBub2RlIGFuZCBwb3AgaXRcbiAgICAgICAgLy8gaGF2ZSB0byByZXNldCBuZXcgdGFpbCdzIG5leHROb2RlIHRvIG51bGwgYWZ0ZXIgdGhlIG9sZCB0YWlsXG4gICAgICAgIC8vIGlzIHBvcHBlZFxuICAgICAgICBsZXQgcG9pbnRlciA9IGhlYWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvaW50ZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcblxuICAgICAgICB3aGlsZSAocG9pbnRlci5uZXh0Tm9kZSAhPT0gdGFpbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlci5uZXh0Tm9kZSlcbiAgICAgICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLm5leHROb2RlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHBvaW50ZXIubmV4dE5vZGUgPSBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgXG4gICAgICAgIC8vIG1ha2UgbmV3IHRhaWw6XG4gICAgICAgIHRhaWwgPSBwb2ludGVyO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcblxuICAgIH1cblxuICAgIFxuXG5cblxuICAgIC8vIGZvciB0b1N0cmluZygpLCBtYXliZSB1c2UgYSB3aGlsZSBsb29wLCBpdGVyYXRlIHRocm91Z2ggZWFjaCBub2RlXG4gICAgLy8gdW50aWwgaXQgYmVjb21lcyBudWxsXG5cblxuICAgIHJldHVybiB7IHByZXBlbmQsXG4gICAgICAgIGFwcGVuZCxcbiAgICAgICAgZ2V0U2l6ZSxcbiAgICAgICAgcmV0dXJuSGVhZCxcbiAgICAgICAgcmV0dXJuVGFpbCxcbiAgICAgICAgcG9wVGFpbCxcbiAgICAgICAgdHJhdmVyc2VMaXN0IH1cblxufVxuXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbi8vIGV4cG9ydCBjbGFzcyBMaW5rZWRMaXN0IHtcbi8vICAgICBjb25zdHJ1Y3RvciAoaGVhZCwgdGFpbCwgbGVuZ3RoKSB7XG4vLyAgICAgICAgIHRoaXMuaGVhZCA9IGhlYWQ7XG4vLyAgICAgICAgIHRoaXMudGFpbCA9IHRhaWw7XG4vLyAgICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbi8vICAgICB9XG5cbi8vICAgIGFwcGVuZChjaG9zZW5WYWx1ZSkge1xuLy8gICAgIC8vIHRyYW5zZmVyIG9sZCB0YWlsIGluZm86XG4vLyAgICAgbGV0IG9sZFRhaWw7XG4vLyAgICAgaWYgKHRoaXMudGFpbCAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgIG9sZFRhaWwgPSB0aGlzLnRhaWw7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG9sZFRhaWwpO1xuLy8gICAgIH07XG5cbi8vICAgICB0aGlzLmxlbmd0aCArPSAxO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubGVuZ3RoKVxuXG4vLyAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKCk7XG4vLyAgICAgbmV3Tm9kZS52YWx1ZSA9IGNob3NlblZhbHVlO1xuLy8gICAgIGNvbnNvbGUubG9nKG5ld05vZGUpO1xuLy8gICAgIC8vIHNldCBpbmRleCB2YWx1ZSBvZiBuZG9lXG4vLyAgICAgbmV3Tm9kZS5pbmRleCA9IHRoaXMubGVuZ3RoO1xuXG4vLyAgICAgdGhpcy50YWlsID0gbmV3Tm9kZTtcbi8vICAgICB0aGlzLnRhaWwubmV4dE5vZGUgPSBudWxsO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudGFpbCk7XG4vLyAgICAgLy8gY2hhbmdlIG5leHROb2RlIG9mIHRoZSBvbGQgdGFpbDpcbi8vICAgICBpZiAob2xkVGFpbCAhPT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgIG9sZFRhaWwubmV4dE5vZGUgPSB0aGlzLnRhaWwudmFsdWU7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG9sZFRhaWwpO1xuLy8gICAgIH1cbiAgICBcblxuLy8gICAgIHJldHVybiB0aGlzLnRhaWxcbiAgICBcbi8vICAgIH1cblxuXG5cbi8vICAgIHByZXBlbmQoY2hvc2VuVmFsdWUpIHtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWQpXG4vLyAgICAgbGV0IG9sZEhlYWQ7XG4vLyAgICAgLy8gdHJhbnNmZXIgZGF0YSBmcm9tIG9sZCBoZWFkOlxuLy8gICAgIGlmICh0aGlzLmhlYWQgIT09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICBvbGRIZWFkID0gdGhpcy5oZWFkO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyhvbGRIZWFkKTtcbiAgICBcblxuLy8gICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSgpO1xuLy8gICAgIG5ld05vZGUudmFsdWUgPSBjaG9zZW5WYWx1ZTtcbi8vICAgICAvLyB1cGRhdGUgaGVhZDpcbi8vICAgICB0aGlzLmhlYWQgPSBuZXdOb2RlO1xuXG4vLyAgICAgY29uc29sZS5sb2codGhpcy50YWlsKTtcblxuLy8gICAgIGlmICh0aGlzLmxlbmd0aCA8IDIpIHtcbi8vICAgICAgICAgdGhpcy5oZWFkLm5leHROb2RlID0gdGhpcy50YWlsLnZhbHVlO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHRoaXMuaGVhZC5uZXh0Tm9kZSA9IG9sZEhlYWQudmFsdWU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZCk7XG5cbi8vICAgICB0aGlzLmxlbmd0aCArPSAxO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubGVuZ3RoKTtcblxuLy8gICAgIHJldHVybiB0aGlzLmhlYWRcblxuLy8gICAgfVxuLy8gfTtcblxuXG5cblxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvciAodmFsdWUsIG5leHROb2RlID0gbnVsbCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV4dE5vZGUgPSBuZXh0Tm9kZTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmltcG9ydCB7IGxpbmtlZExpc3QyIH0gZnJvbSBcIi4vbGlua2VkLWxpc3QtY2xhc3NcIjtcblxuXG5jb25zdCB0ZXN0UnVuID0gbmV3IGxpbmtlZExpc3QyKCk7XG4vLyBjb25zb2xlLmxvZyh0ZXN0UnVuLmFwcGVuZCgpKTtcblxuLy8gdGVzdFJ1bi5hcHBlbmQoNTYpO1xuXG4vLyB0ZXN0UnVuLnByZXBlbmQoNDQ0KTtcblxuLy8gdGVzdFJ1bi5wcmVwZW5kKCduZXh0Tm9kZSBzaG91bGQgYmUgNDQ0JylcblxuLy8gdGVzdFJ1bi5wcmVwZW5kKCduZXh0Tm9kZSBzaG91bGQgYmUgdGV4dCEnKTtcblxuLy8gdGVzdFJ1bi5hcHBlbmQoOTk5KTtcblxuXG5cbnRlc3RSdW4ucHJlcGVuZCg0NSk7XG5cblxudGVzdFJ1bi5wcmVwZW5kKDQ2KTtcbnRlc3RSdW4ucmV0dXJuSGVhZCgpO1xuXG5cbi8vIHRlc3RSdW4ucmV0dXJuVGFpbCgpO1xudGVzdFJ1bi5hcHBlbmQoMzMpO1xudGVzdFJ1bi5yZXR1cm5UYWlsKCk7XG5cbnRlc3RSdW4uYXBwZW5kKDY5KTtcblxudGVzdFJ1bi5nZXRTaXplKCk7XG5cblxudGVzdFJ1bi5wb3BUYWlsKClcblxudGVzdFJ1bi50cmF2ZXJzZUxpc3QoKTtcbnRlc3RSdW4ucmV0dXJuVGFpbCgpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
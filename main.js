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
        tail.nextNode = null;
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

    function traverseList() {
        let pointer = head;

        while (pointer !== null) {
            console.log(pointer);
            pointer = pointer.nextNode;
        }
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
// testRun.returnHead();

testRun.prepend(46);
testRun.returnHead();


// testRun.returnTail();
testRun.append(33);
testRun.returnTail();

testRun.getSize();


testRun.popTail()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7OztBQUdwQyxZQUFZLDZDQUFJOztBQUVoQjtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDZDQUFJO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSw0QkFBNEIsNkNBQUk7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOzs7QUFHQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0tBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0xrRDs7O0FBR2xELG9CQUFvQiwyREFBVztBQUMvQjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL21haW4tdGVtcGxhdGUvLi9zcmMvbGlua2VkLWxpc3QtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS8uL3NyYy9ub2RlLWNsYXNzLmpzIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWFpbi10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21haW4tdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tYWluLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLWNsYXNzXCI7XG5cblxuY29uc29sZS5sb2coTm9kZSk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgbGlua2VkTGlzdDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGxlbmd0aCA9IDA7XG4gICAgbGV0IGhlYWQgPSBudWxsO1xuICAgIGxldCB0YWlsID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHByZXBlbmQodmFsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWwsIGhlYWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBpZiAoaGVhZCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgICAgICB0YWlsID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxXG4gICAgICAgICAgICByZXR1cm4ge2hlYWQsIHRhaWwsIGxlbmd0aH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaGVhZCA9IG5ld05vZGU7XG4gICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICByZXR1cm4gaGVhZFxuICAgIH1cblxuXG5cbiAgICBmdW5jdGlvbiBhcHBlbmQodmFsKSB7XG4gICAgICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSh2YWwsIHRhaWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcblxuICAgICAgICBpZiAodGFpbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGFpbCA9IG5ld05vZGU7XG4gICAgICAgICAgICBoZWFkID0gbmV3Tm9kZTtcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge3RhaWwsIGhlYWQsIGxlbmd0aH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhaWwgPSBuZXdOb2RlO1xuICAgICAgICB0YWlsLm5leHROb2RlID0gbnVsbDtcbiAgICAgICAgbGVuZ3RoICs9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aClcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiBsZW5ndGhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5IZWFkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhoZWFkKTtcbiAgICAgICAgcmV0dXJuIGhlYWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXR1cm5UYWlsKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0YWlsKTtcbiAgICAgICAgcmV0dXJuIHRhaWxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3BUYWlsKCkge1xuICAgICAgICAvLyB3b3JrIG9uIGdldHRpbmcgcG9pbnRlciB0byB3b3JrIHRvIG5hdmlnYXRlIHRvIGxhc3Qgbm9kZSBhbmQgcG9wIGl0XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcbiAgICAgICAgLy8gcmVtb3ZlOlxuICAgICAgICBwb2ludGVyID0gdGFpbDtcblxuICAgICAgICBjb25zb2xlLmxvZyhwb2ludGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmF2ZXJzZUxpc3QoKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gaGVhZDtcblxuICAgICAgICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocG9pbnRlcik7XG4gICAgICAgICAgICBwb2ludGVyID0gcG9pbnRlci5uZXh0Tm9kZTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICAvLyBmb3IgdG9TdHJpbmcoKSwgbWF5YmUgdXNlIGEgd2hpbGUgbG9vcCwgaXRlcmF0ZSB0aHJvdWdoIGVhY2ggbm9kZVxuICAgIC8vIHVudGlsIGl0IGJlY29tZXMgbnVsbFxuXG5cbiAgICByZXR1cm4geyBwcmVwZW5kLFxuICAgICAgICBhcHBlbmQsXG4gICAgICAgIGdldFNpemUsXG4gICAgICAgIHJldHVybkhlYWQsXG4gICAgICAgIHJldHVyblRhaWwsXG4gICAgICAgIHBvcFRhaWwsXG4gICAgICAgIHRyYXZlcnNlTGlzdCB9XG5cbn1cblxuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG4vLyBleHBvcnQgY2xhc3MgTGlua2VkTGlzdCB7XG4vLyAgICAgY29uc3RydWN0b3IgKGhlYWQsIHRhaWwsIGxlbmd0aCkge1xuLy8gICAgICAgICB0aGlzLmhlYWQgPSBoZWFkO1xuLy8gICAgICAgICB0aGlzLnRhaWwgPSB0YWlsO1xuLy8gICAgICAgICB0aGlzLmxlbmd0aCA9IDA7XG4vLyAgICAgfVxuXG4vLyAgICBhcHBlbmQoY2hvc2VuVmFsdWUpIHtcbi8vICAgICAvLyB0cmFuc2ZlciBvbGQgdGFpbCBpbmZvOlxuLy8gICAgIGxldCBvbGRUYWlsO1xuLy8gICAgIGlmICh0aGlzLnRhaWwgIT09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICBvbGRUYWlsID0gdGhpcy50YWlsO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhvbGRUYWlsKTtcbi8vICAgICB9O1xuXG4vLyAgICAgdGhpcy5sZW5ndGggKz0gMTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmxlbmd0aClcblxuLy8gICAgIGNvbnN0IG5ld05vZGUgPSBuZXcgTm9kZSgpO1xuLy8gICAgIG5ld05vZGUudmFsdWUgPSBjaG9zZW5WYWx1ZTtcbi8vICAgICBjb25zb2xlLmxvZyhuZXdOb2RlKTtcbi8vICAgICAvLyBzZXQgaW5kZXggdmFsdWUgb2YgbmRvZVxuLy8gICAgIG5ld05vZGUuaW5kZXggPSB0aGlzLmxlbmd0aDtcblxuLy8gICAgIHRoaXMudGFpbCA9IG5ld05vZGU7XG4vLyAgICAgdGhpcy50YWlsLm5leHROb2RlID0gbnVsbDtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnRhaWwpO1xuLy8gICAgIC8vIGNoYW5nZSBuZXh0Tm9kZSBvZiB0aGUgb2xkIHRhaWw6XG4vLyAgICAgaWYgKG9sZFRhaWwgIT09IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICBvbGRUYWlsLm5leHROb2RlID0gdGhpcy50YWlsLnZhbHVlO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhvbGRUYWlsKTtcbi8vICAgICB9XG4gICAgXG5cbi8vICAgICByZXR1cm4gdGhpcy50YWlsXG4gICAgXG4vLyAgICB9XG5cblxuXG4vLyAgICBwcmVwZW5kKGNob3NlblZhbHVlKSB7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5oZWFkKVxuLy8gICAgIGxldCBvbGRIZWFkO1xuLy8gICAgIC8vIHRyYW5zZmVyIGRhdGEgZnJvbSBvbGQgaGVhZDpcbi8vICAgICBpZiAodGhpcy5oZWFkICE9PSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgb2xkSGVhZCA9IHRoaXMuaGVhZDtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2cob2xkSGVhZCk7XG4gICAgXG5cbi8vICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUoKTtcbi8vICAgICBuZXdOb2RlLnZhbHVlID0gY2hvc2VuVmFsdWU7XG4vLyAgICAgLy8gdXBkYXRlIGhlYWQ6XG4vLyAgICAgdGhpcy5oZWFkID0gbmV3Tm9kZTtcblxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudGFpbCk7XG5cbi8vICAgICBpZiAodGhpcy5sZW5ndGggPCAyKSB7XG4vLyAgICAgICAgIHRoaXMuaGVhZC5uZXh0Tm9kZSA9IHRoaXMudGFpbC52YWx1ZTtcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgICB0aGlzLmhlYWQubmV4dE5vZGUgPSBvbGRIZWFkLnZhbHVlO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWQpO1xuXG4vLyAgICAgdGhpcy5sZW5ndGggKz0gMTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmxlbmd0aCk7XG5cbi8vICAgICByZXR1cm4gdGhpcy5oZWFkXG5cbi8vICAgIH1cbi8vIH07XG5cblxuXG5cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY2xhc3MgTm9kZSB7XG4gICAgY29uc3RydWN0b3IgKHZhbHVlLCBuZXh0Tm9kZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5leHROb2RlID0gbmV4dE5vZGU7XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBsaW5rZWRMaXN0MiB9IGZyb20gXCIuL2xpbmtlZC1saXN0LWNsYXNzXCI7XG5cblxuY29uc3QgdGVzdFJ1biA9IG5ldyBsaW5rZWRMaXN0MigpO1xuLy8gY29uc29sZS5sb2codGVzdFJ1bi5hcHBlbmQoKSk7XG5cbi8vIHRlc3RSdW4uYXBwZW5kKDU2KTtcblxuLy8gdGVzdFJ1bi5wcmVwZW5kKDQ0NCk7XG5cbi8vIHRlc3RSdW4ucHJlcGVuZCgnbmV4dE5vZGUgc2hvdWxkIGJlIDQ0NCcpXG5cbi8vIHRlc3RSdW4ucHJlcGVuZCgnbmV4dE5vZGUgc2hvdWxkIGJlIHRleHQhJyk7XG5cbi8vIHRlc3RSdW4uYXBwZW5kKDk5OSk7XG5cblxuXG50ZXN0UnVuLnByZXBlbmQoNDUpO1xuLy8gdGVzdFJ1bi5yZXR1cm5IZWFkKCk7XG5cbnRlc3RSdW4ucHJlcGVuZCg0Nik7XG50ZXN0UnVuLnJldHVybkhlYWQoKTtcblxuXG4vLyB0ZXN0UnVuLnJldHVyblRhaWwoKTtcbnRlc3RSdW4uYXBwZW5kKDMzKTtcbnRlc3RSdW4ucmV0dXJuVGFpbCgpO1xuXG50ZXN0UnVuLmdldFNpemUoKTtcblxuXG50ZXN0UnVuLnBvcFRhaWwoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
import { Node } from "./node-class";


console.log(Node);

// eslint-disable-next-line import/prefer-default-export
export const linkedList2 = function () {
    const length = 0;
    let head = null;
    const tail = null;

    function prepend(val) {
        const newNode = new Node(val, head);
        // newNode.value = val;
        console.log(newNode);

        if (head === null) {
            head = newNode;
            return head
        }

        // save data from old head


        // head = newNode;
    }



    function append() {

    }



    return { prepend,
        append }

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





import { Node } from "./node-class";


console.log(Node);

// eslint-disable-next-line import/prefer-default-export
export const linkedList2 = function () {
    let length = 0;
    let head = null;
    let tail = null;

    function prepend(val) {
        const newNode = new Node(val, head);
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
        const newNode = new Node(val, tail);
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





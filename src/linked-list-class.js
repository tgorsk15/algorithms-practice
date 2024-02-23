import { Node } from "./node-class";


console.log(Node);
// eslint-disable-next-line import/prefer-default-export
export class LinkedList {
    constructor (head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

   append(chosenValue) {
    const newNode = new Node();
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
    

    const newNode = new Node();
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





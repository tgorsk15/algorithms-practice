import { Node } from "./node-class";


console.log(Node);
// eslint-disable-next-line import/prefer-default-export
export class LinkedList {
    constructor (head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
        this.node = Node;
    }

   append(chosenValue) {
    const newNode = new Node();
    console.log(newNode);
    newNode.value = chosenValue;
    console.log(newNode.value);
    

    this.tail = newNode;
    this.tail.nextNode = null;
    console.log(this.tail.value);
    console.log(this.tail.nextNode);

    this.length += 1;
    console.log(this.length) 
    
   }


   prepend(chosenValue) {
    const newNode = new Node();
    console.log(newNode);
    newNode.value = chosenValue;

    this.head = newNode;
   }
};





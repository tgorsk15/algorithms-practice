import { Node } from "./node-class";


console.log(Node);
// eslint-disable-next-line import/prefer-default-export
export class LinkedList {
    constructor (head, tail, length) {
        this.head = head;
        this.tail = tail;
        this.length = length;
        this.node = Node;
    }

   append(chosenValue) {
    const newNode = new Node(chosenValue);
    newNode.value = chosenValue;
    console.log(newNode.value);
    console.log(newNode);
    return newNode
    
   }
};





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
        printList }

}








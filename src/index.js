
import { linkedList2 } from "./linked-list-class";


const testRun = new linkedList2();


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

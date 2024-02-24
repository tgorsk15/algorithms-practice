
import { linkedList2 } from "./linked-list-class";


const testRun = new linkedList2();
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
// testRun.returnTail();
testRun.append('hey there');
testRun.append(69);
testRun.append('last one gets deleted');

testRun.getSize();
testRun.popTail();
testRun.getSize();

// testRun.getSize();
// testRun.popTail();
// testRun.getSize();

testRun.traverseList();
// testRun.returnTail();

testRun.atIndex(6);
testRun.atIndex(1);


// testRun.doesContain('hi');
// testRun.doesContain(69);
// testRun.doesContain('hey there')

testRun.find(69);
testRun.find(72);
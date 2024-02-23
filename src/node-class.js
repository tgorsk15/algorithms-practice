// eslint-disable-next-line import/prefer-default-export
export class Node {
    constructor (value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
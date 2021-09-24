class Node {
    constructor(content) {
        this.content = content;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            count++;
        }
        return count;

    }
    clear() {
        this.head = null;
    }
    getFirst() {
        return this.head
    }
    getLast() {

        while (this.head) {
            if (this.head.next == null) {
                return this.head;
            }
            this.head = this.head.next;
        }
    }
}

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(6);
let node4 = new Node(7);
let node5 = new Node(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

let list = new LinkedList(node1);

console.log(list.getFirst().content);

export { Node, LinkedList };
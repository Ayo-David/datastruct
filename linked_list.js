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
    return this.head;
  }
  getLast() {
    while (this.head) {
      if (this.head.next == null) {
        return this.head;
      }
      this.head = this.head.next;
    }
  }

  addAt(data, i) {
    let current = this.head;
    let newNode = new Node(data);
    let count = 0;
    while (current) {
      current = current.next;
      count++;
      if (count === i) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
    }
  }

  size() {
    let current = this.head;
    if (current === null) return 0;
    let count = 0;
    while (current) {
      current = current.next;
      count++;
    }
    return count;
  }

  removeTop() {
    let current = this.head;
    if (current == null) return;
    this.head = current.next;
    //current.next = null
  }

  remooveBottom() {
    let current = this.head;

    while (current) {
      current = current.next;
      if (current.next.next == null) {
        current.next == null;
      }
    }

    while(current){
      this.head = current.next
      current = current.next
    }
  }

  removeAt(index){
    let current = this.head;

    for(let i=0; i<index, i++){
current = current.next
    }
    current.next = current.next.next
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

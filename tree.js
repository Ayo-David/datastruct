class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// class BTree{

// }
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//1. Depth First Values (Stack) FILO
//2. Breadth First Values (Queeu) FIFO

//recurssive method
const depthFirstValue = (root) => {
  if (!root) return "";
  return [
    root.data,
    ...depthFirstValue(root.left),
    ...depthFirstValue(root.right),
  ];
};

//iterative method
//using stack pop and push
//pop elemment will be display
//push traversal node into the stack
const depthFirstValue2 = (root) => {
  //first add root to the stack array
  let stack = [root];
  let arr = [];
  while (stack.length > 0) {
    if (!root) return "";
    let current = stack.pop(); //pop last added and traverse
    //arr.push(current); // use this to see how node is define
    arr.push(current.data);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return arr;
};

//iterative metthod
const breadthFirstValues = (root) => {
  //console.log(`root.data = `, root.data)
  let queeu = [];
  let arr = [];
  queeu.push(root);
  while (queeu.length > 0) {
    if (!root) return [];
    let current = queeu.shift();
    arr.push(current.data);
    //console.log(current.data);
    if (current.left) queeu.push(current.left);
    if (current.right) queeu.push(current.right);
  }
  return arr;
};

//console.log(`depthValues = `, depthFirstValue2(a));

module.exports = { breadthFirstValues };

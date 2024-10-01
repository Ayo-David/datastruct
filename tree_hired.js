//import { breadthFirstValues } from "./tree";
const { breadthFirstValues } = require("./tree.js");

const highestinarray = (numbers) => {
  //console.log(numbers);
  // Type your solution here
  if (numbers.length === 0) return 0;
  let high = numbers[0];
  for (let i of numbers) {
    if (i > high) high = i;
  }

  return high;
};

//console.log(`log = `, highestinarray([-2, 1, 1, 4, 6, 7, 2, 8]));

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const linked = (root, targetSum) => {
  if (!root) return false;
  let hasPath = false;
  const loopNode = (node, sum) => {
    if (node.left === null && node.right === null) {
      if (sum == node.val) hasPath = true;
      return;
    }

    if (node.left) {
      loopNode(node.left, sum - node.val);
    }
    if (node.right) {
      loopNode(node.right, sum - node.val);
    }
    console.log(`the sum is now = `, sum);
  };
  loopNode(root, targetSum);
  return hasPath;
};

const a5 = new Node(5);
const a4 = new Node(4);
const a8 = new Node(8);
const a11 = new Node(11);
const a13 = new Node(13);
const b4 = new Node(4);
const a7 = new Node(7);
const a2 = new Node(2);
const a1 = new Node(1);

a5.left = a4;
a5.right = a8;
a4.left = a11;
a8.left = a13;
a8.right = b4;
b4.right = a1;
a11.left = a7;
a11.right = a2;

//console.log(`ans = `, linked(a5, 22));

//linked([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22)

//A=[3,6,2,9,-1,10]

const l3 = new Node(3);
const l6 = new Node(6);
const l2 = new Node(2);
const l9 = new Node(9);
const l1 = new Node(-1);
const l10 = new Node(20);
l3.left = l6;
l3.right = l2;
l6.left = l9;
l6.right = l1;
l2.left = l10;

const largeSide = (root) => {
  if (!root) return ""; //if root is null, empty B.Tree
  let leftSum = 0;
  let rightSum = 0;
  const sumation = (node) => {
    if (!node) return 0;
    // if (node.right == null && node.left == null) {
    //   return node.val;
    // }
    console.log(`the node is now `, node.val);

    leftSum += sumation(node.left);
    console.log(`leftSum = `, leftSum);

    rightSum += sumation(node.right);
    console.log(`rightSum = `, rightSum);

    console.log(
      `sum is now = `,
      node.val + sumation(node.right) + sumation(node.left)
    );
    return node.val + sumation(node.right) + sumation(node.left);
  };
  console.log(`sum is still now =`, sumation(root));
  console.log(`left / right = `, leftSum, rightSum);
  console.log("total leftsumPath", (leftSum = leftSum + root.val));
  console.log("total rightsumPath", (rightSum = rightSum + root.val));
  return leftSum > rightSum ? "left" : "right";
};

//console.log(`largeSide = `, largeSide(l3));

function largSide(root) {
  if (!root) return "";
  const recurse = (root) => {
    if (!root) return 0;
    return root.val + recurse(root.left) + recurse(root.right);
  };
  const left = root.val + recurse(root.left);
  const right = root.val + recurse(root.right);

  return left > right ? "left" : "right";
}

//console.log(`largSide = `, largSide(l3));

//console.log(`log = `, breadthFirstValues(l3));

//DFS is more of recursive use
//BFS is mostly iterative but could be recursive too

//PreOrder - log or output parent first
//InOrder - log or ouput parent at the middle
//PostORDER - log or output parent last

var inorderTraversal = function (root) {
  let output = [];
  const traverse = (node) => {
    if (!node) return [];
    traverse(node.left);
    output.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return [...output];
};

const bs5 = new Node(5);
const bs1 = new Node(1);
const bs4 = new Node(4);
// const bs3 = new Node(3);
// const bs6 = new Node(6);
// const bs7 = new Node(7);
// const bs2 = new Node(2);

bs5.left = bs1;
bs5.right = bs4;
// bs4.left = bs3;
// bs4.right = bs6;
// bs1.right = bs7;
// bs7.right = bs2;

//root = [1,1]
//root = [2,1,3]
//root = [5,1,4,null,null,3,6]

const OrderTraversal = (root) => {
  if (!root) return "";
  //console.log(`log = `, root.val);
  let val = "";
  //in function helps us to be able to return val
  const recurse = (root) => {
    if (!root) return "";
    recurse(root.right);
    recurse(root.left);
    val += root.val;
  };

  recurse(root);
  return val;
};

//console.log(`Order = `, OrderTraversal(bs5));

// Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Examples
// Input: root = [2,1,3]
// Output: true

// Input: root = [5,1,4,null,null,3,6]
// Output: false
//Explanation: The root node's value is 5 but its right child's value is 4.

// var isValidBST = function (root) {
//   if (!root) return true;
//   let isValid = true;
//   const traverse = (node) => {
//     if (node.right == null && node.left == null) return true;
//     if (!node.left) return true;
//     if (!node.right) return true;
//     if (node.left.val < node.val && node.right.val > node.val) {
//       console.log(`log = `, node.left, node.val, node.right);
//       traverse(node.left);
//       traverse(node.right);
//     } else {
//       isValid = false;
//     }
//   };
//   traverse(root);
//   return isValid;
// };

// var isValidBST2 = function (root) {
//   if (!root) return false;
//   queeu = [root];
//   while (queeu.length > 0) {
//     let current = queeu.shift();
//     if (current.left.val < current.val) {
//       queeu.push(current.left);
//     }
//     if (current.right.val > current.val) {
//       queeu.push(current.left);
//     }
//     return false;
//   }
//   return true;
// };

var isValidBST3 = function (root) {
  //let mid = root.val
  if (!root) return true;

  const recurse = (node) => {
    if (!node) return true;

    if (!(node.val > node.left.val && node.val < node.right.val)) {
      return false;
    }
    //NB. We cant use if..else it will end the whole process
    if (recurse(node.left)) {
    } else {
      return false;
    }

    if (!recurse(node.right)) return false;

    // mid = node.val
    return true;
  };
  //return recurse(root.left) && recurse(root.right);
  return recurse(root);
};

var isValidBST4 = function (root) {
  let min = -Infinity;
  const traverse = (node) => {
    if (!node) return true;

    if (!traverse(node.left)) return false;
    //if(traversse(node.left)){
    //continue
    //}else{
    // return false
    //}
    //console.log(`log = `, node.val, )
    if (min < node.val) {
      min = node.val;
    } else {
      return false;
    }
    //output.push(node.val);
    if (!traverse(node.right)) return false;
    return true;
  };
  return traverse(root);
};

function isValidBST5(root) {
  if (!root) return false;
  let current = -Infinity;
  let condition = true;
  const recurse = (root) => {
    if (!root) return;
    recurse(root.left);
    console.log("g=", root.val);
    if (current < root.val) {
      current = root.val;
    } else {
      condition = false;
    }
    recurse(root.right);
  };
  recurse(root);
  return condition;
}

//console.log(`isValidBST5 = `, isValidBST5(l3));

const rightLeaveSum = (root) => {
  if (!root) return 0;
  let stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    let current = stack.pop();

    if (current.right) {
      if (!current.right.left && !current.right.right) {
        sum += current.val;
      }
      stack.push(current.right);
    }
    if (current.left) stack.push(current.left);
  }
  return sum;
};

const rightLeaveSum2 = (root) => {
  let sum = 0;
  const recurse = (root) => {
    if (!root) return;
    if (root.right) {
      if (!root.right.left && !root.right.right) {
        sum += root.right.val;
      }
    }
    recurse(root.right);
    recurse(root.left);
  };
  recurse(root);
  return sum;
};

function rightLeaveSuM(root) {
  if (!root) return 0;

  ////////////// using BFS
  // let queeu = [root];
  // let sum = 0;
  // while (queeu.length > 0) {
  //   const current = queeu.shift();
  //   if (current.right) {
  //     if (!current.right.left && !current.right.right) sum += current.right.val;
  //   }
  //   if (current.left) queeu.push(current.left);
  //   if (current.right) queeu.push(current.right);
  // }
  // return sum;

  /////////////////// using DFS
  let sum = 0;
  const recurse = (root) => {
    if (!root) return;
    recurse(root.left);
    recurse(root.right);
    if (root.right) {
      if (!root.right.left && !root.right.right) sum += root.right.val;
    }
  };

  recurse(root);
  return sum;
}

//console.log(`rightLeaveSuM = `, rightLeaveSuM(a5));

//https://www.geeksforgeeks.org/find-sum-right-leaves-given-binary-tree/
const sumRightLeave = (root) => {
  let sum = 0;
  const summ = (node) => {
    if (!node) return 0;
    if (node.right != null) {
      console.log(`right = `, node.right.val);
      if (node.right.right == null && node.right.left == null) {
        //  console.log(`right right = `, node.right.right.val);
        sum = sum + node.right.val;
        console.log(`sum = `, sum);
      }
    }
    summ(node.left);
    summ(node.right);
    return sum;
  };
  return summ(root);
};

function sumRightLeave2(root) {
  let sum = 0;
  const recurse = (node) => {
    if (!node) return;
    if (node.right) {
      if (node.right.left === null && node.right.left === null) {
        sum += node.right.val;
      }
    }
    recurse(node.left);
    recurse(node.right);
    return sum;
  };
  return recurse(root);
}

function levelOrder2(root) {
  if (!root) return null;
  return (
    root.val + "," + levelOrder2(root.left) + "," + levelOrder2(root.right)
  );
}

function levelOrder(root, A) {
  if (!root) return null;

  //check if the giving node A is the root - if true
  //return it left if it exist otherwise right
  if (root.val == A) {
    if (root.left) return root.left.val;
    if (root.right) {
      return root.right.val;
    } else {
      return null;
    }
  }

  let queeu = [root];
  let tree = [];
  //queeu.push(root);
  //if it's not the root then run this queeu
  while (queeu.length > 0) {
    let el = queeu.shift();
    // console.log(`el = `, el.val);
    if (el.val === A) {
      if (queeu[0]) return queeu[0].val;
      return null;
    }

    //tree.push(el.val);
    if (el.left) {
      queeu.push(el.left);
    }
    if (el.right) queeu.push(el.right);
  }
  return null;
}
//Given a Binary Tree with positive values at each node, the task is to print the maximum number
//that can be formed by arranging nodes at each level.
//console.log(`maxComb = `, maxComb(a5));
// Examples:

// Input:                4
//                     /   \
//                    2    59
//                   / \   / \
//                  1   3  2  6
// Output:
// Maximum number at 0'th level is 4
// Maximum number at 1'st level is 592
// Maximum number at 2'nd level is 6321


function maxComb2(root) {
  if (!root) return;
  let queeu = [root];
  while (queeu.length > 0) {
    let n = queeu.length;
    let vess = [];

    for (let i = 0; i < n; i++) {
      //while (n > 0) { //you can also use while loop -note anytime you use while, the iterator conditional
      //eg  n-- must be inside that while loop
      let current = queeu.shift();
      //console.log(`current.val = `, current.val);
      vess.push(current.val);
      if (current.left) queeu.push(current.left);
      if (current.right) queeu.push(current.right);
      //n--;
    }
    //console.log(`///////`);
    console.log(`log = `, vess.sort((a, b) => b - a).join(" "));
  }
}

function maxComb(root) {
  if (!root) return;
  let vess = [];
  let queeu = [root];
  while (queeu.length > 0) {
    let count = 1;
    vess = [...queeu];
    //vess.sort();
    //console.log(`log = `, ...vess);
    while (queeu.length > 0) {
      const current = queeu.shift();
      if (current.left) queeu.push(current.left);
      if (current.left) queeu.push(current.right);
      vess.push(current.val);
    }
  }
}

function largestNumPerLevel(root) {
  if (!root) return null;
  let queeu = [root];

  let count = 0;
  while (queeu.length > 0) {
    //use this counter to keep the length of element queeued at the same
    //BFS level
    count = queeu.length;
    let i = 0;
    let v = [];
    //while the counter is not equal to zero, queeu left and right
    //for each element in a
    while (count--) {
      let q = queeu.shift();
      v.push(q.val);
      if (q.left) queeu.push(q.left);
      if (q.right) queeu.push(q.right);
    }
    i++;
    console.log(
      `At ${i} = `,
      v.sort((a, b) => b - a)
    );
  }
}

console.log(`maxComb = `, largestNumPerLevel(a5));

// Given a Binary Tree, the task is to find the absolute difference between the sums of odd and even positioned nodes.
//A node is said to be odd and even positioned if its position in the current level is odd and even respectively.
//Note that the first element of each row is considered as odd positioned.
// Examples:

// Input:
//       5
//     /   \
//    2     6
//  /  \     \
// 1    4     8
//     /     / \
//    3     7   9
// Output: 11
// Level     oddPositionNodeSum  evenPositionNodeSum
// 0             5                  0
// 1             2                  6
// 2             9                  4
// 3             12                 7
// Difference = |(5 + 2 + 9 + 12) - (0 + 6 + 4 + 7)| = |28 - 17| = 11

// always use count + while, if you need to wait at the BFS same level
function diffOddEven(root) {
  if (!root) return 0;
  let queeu = [root];
  let count = 0;
  let sumOdd = 0;
  let sumEven = 0;
  while (queeu.length > 0) {
    count = queeu.length();
    let V = [];
    while (count--) {
      let q = queeu.shift();
      V.push(q);

      if (q.left) queeu.push(q.left);
      if (q.right) queeu.push(q.right);
    }
    for (let i = 0; i < V.length - 1; i++) {
      if (i % 2 == 0) {
        sumOdd += V[i];
      } else {
        sumEven += V[i];
      }
    }
  }
  return Math.abs(sumEven - sumOdd);
}

// Given a Binary Tree having positive and negative nodes, the task is to find the maximum sum of leaf nodes among all level of the given binary tree.
// Examples:

// Input:
//                         4
//                       /   \
//                      2    -5
//                     / \
//                   -1   3
// Output: 2
// Sum of all leaves at 0th level is 0.
// Sum of all leaves at 1st level is -5.
// Sum of all leaves at 2nd level is 2.
// Hence maximum sum is 2.
// always use count + while, if you need to wait at the BFS same level

const maxSumLf = (root) => {
  let queeu = [root];
  let max = 0;
  while (queeu.length > 0) {
    let sumLeaf = 0;
    let current = queeu.shift();
    if (current.left) {
      if (!current.left.right && !current.left.left) {
        sumLeaf += current.left.val;
      }
      queeu.push(current.left);
    }
    if (current.right) {
      if (!current.right.right && !current.right.right) {
        sumLeaf += current.right.val;
      }
      queeu.push(current.left);
    }
    let max = Math.max(max, sumLeaf);
  }
  return max;
};
function maxSumLeaf(root) {
  if (!root) return 0;
  let queeu = [root];
  let max = 0;
  let count = 0;
  while (queeu.length > 0) {
    let sumLeaf = 0;
    count = queeu.length();

    while (count--) {
      let q = queeu.shift();

      if (!q.left && !q.right) sumLeaf += q.val;
      if (q.left) queeu.push(q.left);
      if (q.right) queeu.push(q.right);
    }
    max = Math.max(max, sumLeaf);
  }
  return max;
}

console.log(`levelOrder = `, levelOrder2(bs5));

const bfs = (root) => {
  let stack = [root];
  console.log(`stack = `, stack);

  while (stack.length > 0) {
    //if()
    let current = stack.shift();
    console.log(current.val);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
};

//recurssive
const recu = (root) => {
  if (!root) return "";
  return root.val + recu(root.left) + recu(root.right);
};

//find a target
const findTarget = (root, T) => {
  if (!root) return false;
  let queeu = [root];

  while (queeu.length > 0) {
    let current = queeu.shift();
    if (T === current.val) return true;
    if (current.left) queeu.push(current.left);
    if (current.right) queeu.push(current.right);
  }
  return false;
};

const treeSum = (root) => {
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

//recursively find a target
const findTarget2 = (root, T) => {
  if (!root) return false;
  if (root.val === T) return true;
  return findTarget2(root.left, T) || findTarget2(root.right, T);
};

const minVal = (root) => {
  // if (!root) return Infinity;
  let min = Infinity;
  let queeu = [root];
  while (queeu.length > 0) {
    let current = queeu.shift();
    if (current.val < min) {
      min = current.val;
    }
    if (current.left) queeu.push(current.left);
    if (current.right) queeu.push(current.right);
  }
  return min;
};

const minVal2 = (root) => {
  if (!root) return Infinity;
  return Math.min(root.val, minVal2(root.left), minVal2(root.right));
};

const maxPath = (root) => {
  if (!root.left && !root.right) return root.val;
  //if (!root) return -Infinity;
  const maxChild = Math.max(maxPath(root.left), maxPath(root.right));

  return root.val + maxChild(root);
};

const largePath = (root) => {
  if (!root) return 0;
  let left = root.val + largePath(root.left);
  let right = root.val + largePath(root.right);

  if (left == right) return "";
  if (left > right) {
    return "LEFT";
  } else {
    return "RIGTH";
  }
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.left = b;
a.right = c;
b.left = d;
b.right = e;

const p1 = new Node(3);
const p4 = new Node(6);
const p5 = new Node(2);
const p2 = new Node(9);
const p3 = new Node(10);

p1.left = p4;
p1.right = p5;
p4.left = p2;
p5.right = p3;

const isValid = (root) => {
  let valid = true;

  isValid(root.left);
  let current = root.left.val;
  if (current > root.val) return false;
  isValid(root.right);
  //if()
};

console.log(`bfs = `, largePath(p1));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const arrayToBinaryTree = (arr) => {
  if (!arr.length) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const currentNode = queue.shift();

    // Create left child
    if (i < arr.length) {
      currentNode.left = new TreeNode(arr[i]);
      queue.push(currentNode.left);
      i++;
    }

    // Create right child
    if (i < arr.length) {
      currentNode.right = new TreeNode(arr[i]);
      queue.push(currentNode.right);
      i++;
    }
  }

  return root;
};

// Example usage:
const inputArray = [3, 60, 20, 9, -1, 10];
const binaryTreeRoot = arrayToBinaryTree(inputArray);
//console.log("Tree", binaryTreeRoot);

const largeSide2 = (inputArray) => {
  const root = arrayToBinaryTree(inputArray);
  if (!root) return 0;

  const recurse = (root) => {
    if (!root) return 0;
    return root.val + recurse(root.left) + recurse(root.right);
  };

  let left = root.val + recurse(root.left);
  let right = root.val + recurse(root.right);
  console.log(`total = `, left, right);
  if (left == right) return "";

  return left > right ? "Left" : "right";
};

//console.log("Largeside", largeSide2(inputArray));





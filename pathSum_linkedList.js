//import { Node, LinkedList } from "./linked_list";

let node1 = new TreeNode(5, 4, 8);
let node2 = new TreeNode(4, 11, null);
let node3 = new TreeNode(8);
let node4 = new TreeNode(11);
let node5 = new TreeNode(null);
let node6 = new TreeNode(13);
let node7 = new TreeNode(4);
let node8 = new TreeNode(7);
let node9 = new TreeNode(2);
let node11 = new TreeNode(null);
let node10 = new TreeNode(null);
let node12 = new TreeNode(5);
let node13 = new TreeNode(1);

root = new TreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]);

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */

var pathSum = function (root, targetSum) {
  //   if (!root) {
  //     return [];
  //   }
  //   result = [];

  //   function pathSumHelper(node, sum, path) {
  //     path.push(node.val);

  //     if (!node.right && !node.left && sum === node.val) {
  //       result.push(path);
  //     }

  //     if (node.left) {
  //       pathSumHelper(node.left, sum - node.val, path.slice());
  //     }
  //     if (node.right) {
  //       pathSumHelper(node.right, sum - node.val, path.slice());
  //     }
  //   }
  //   pathSumHelper(root, targetSum, []);
  //   return result;
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

console.log(pathSum(root, 22));

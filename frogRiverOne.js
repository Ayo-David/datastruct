//console.log(minimumConcat("abc", "abcbc"));

// A small frog wants to get to the other side of a river. The frog is initially located on one bank of the river (position 0) and wants to get to the opposite bank (position X+1). Leaves fall from a tree onto the surface of the river.

// You are given an array A consisting of N integers representing the falling leaves. A[K] represents the position where one leaf falls at time K, measured in seconds.

// The goal is to find the earliest time when the frog can jump to the other side of the river. The frog can cross only when leaves appear at every position across the river from 1 to X (that is, we want to find the earliest moment when all the positions from 1 to X are covered by leaves). You may assume that the speed of the current in the river is negligibly small, i.e. the leaves do not change their positions once they fall in the river.

// For example, you are given integer X = 5 and array A such that:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// In second 6, a leaf falls into position 5. This is the earliest time when leaves appear in every position across the river.

// Write a function:

// class Solution { public int solution(int X, int[] A); }

// that, given a non-empty array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.

// If the frog is never able to jump to the other side of the river, the function should return −1.

// For example, given X = 5 and array A such that:

//   A[0] = 1
//   A[1] = 3
//   A[2] = 1
//   A[3] = 4
//   A[4] = 2
//   A[5] = 3
//   A[6] = 5
//   A[7] = 4
// the function should return 6, as explained above.

// Write an efficient algorithm for the following assumptions:

// N and X are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..X].

//======================SOLUTIONS========================//

// function solution(X, A) {

//     let holdValues = new Set();
//     for (i = 0; i < A.length; i++) {
//         holdValues.add(A[i]);
//         if (holdValues.size == X) return i;
//     }

//     return -1;

// }

// let holdValues = new Set();
//     for (i = 0; i < A.length; i++) {
//         if(A[i] <= X){
//            holdValues.add(A[i]);
//         }
//         if (holdValues.size == X) return i;
//     }

//     return -1;

// }

// function solution(X, A) {
//     // write your code in JavaScript (Node.js 6.4.0)

//     let sequence = [0];
//     let position = -1;
//     let counter = 0;

//     if (X === 1 && A[0] === 1)
//         return 0;

//     for (let i = 0; i <= A.length - 1; i++) {

//         if (A[i] <= X) {
//             if (!sequence[A[i]]) {
//                 counter++;
//             }

//             sequence[A[i]] = A[i];
//             //if the counter is completely X then position is equal to that index when it got to X
//             if (counter === X) {
//                 position = i;
//                 break;
//             }
//         }
//     }
//     return position;
// }

//let A = [1]
//let A = [1, 1, 2, 5, 3, 4, 3]
let A = [1, 3, 3, 2, 2, 1, 4, 2, 3, 5, 4];
//USING SET
function earliestTime3(X, A) {
  fallingLeaves = new Set();
  anyEmpty = -1;

  for (i = 0; i <= A.length - 1; i++) {
    //console.log('leave at', i, 'is', A[i]);
    if (A[i] <= X) {
      fallingLeaves.add(A[i]);
      console.log("Falling leaves", fallingLeaves);
    }
    //if any position is empty it will never return this value
    if (fallingLeaves.size == X) return i;
  }
  return anyEmpty;
}

//using array as the fallingLeaves hash table
function earliestTime2(X, A) {
  let fallingLeaves = [0];
  let position = 0;
  let anyEmpty = -1;

  // if (X === 1 && A[0] === 1)
  //     return 0;
  console.log("Initial falling leaves", fallingLeaves);

  for (let i = 0; i <= A.length - 1; i++) {
    if (A[i] <= X) {
      console.log("leaves", A[i]);
      if (!fallingLeaves[A[i]]) {
        //position only increases for a new leaf we never had
        position++;
      }
      //array will always update what was there and add new if it was not there before
      fallingLeaves[A[i]] = A[i];
      console.log("Falling leaves", fallingLeaves);

      //just to help us know when to stop and  also to return the time it takes if there's no empty
      if (position === X) {
        anyEmpty = i;
        break;
      }
    }
  }
  return anyEmpty;
}

//solution using object hash table

function earliestTime(X, A) {
  //IF USING OBJECT DONT EQUATE THE FIRST OBJECT TO  0 - OBJECT will see 0 as IF THAT ENTRY DOES NOT EXIST
  let fallingLeaves = {};
  let count = 0;

  for (let i = 0; i <= A.length - 1; i++) {
    console.log("Leaves", A[i]);
    if (A[i] <= X) {
      if (!fallingLeaves[A[i]]) {
        fallingLeaves[A[i]] = i + 1; //IF USING OBJECT DONT START i as 0 - OBJECT will see 0 as IF IT DOESNOT EXIST
        count++;
        console.log("Falling Leaves", fallingLeaves, "and count is:", count);
      }

      if (count == X) return i;
    }
  }
  //run through the falling leaves if any is missing and find the highest time value
  // let earliest = 0
  // for (j = 1; j <= X; j++) {
  //     if (fallingLeaves[j]) {
  //         if (earliest < fallingLeaves[j]) {
  //             earliest = fallingLeaves[j];
  //         }
  //     } else {
  //         return -1;

  //     }

  // }
  //return earliest;
  return -1;
}

console.log("Earliest Time for frog to jump:", earliestTime(4, A));

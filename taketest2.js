//this is not the best solution, search for the best solution online
function countTriangles(A) {
  let count = 0;
  for (let i = 0; i < A.length - 2; i++) {
    let j = i + 1;
    while (j < A.length - 1) {
      let k = j + 1;
      while (k < A.length) {
        console.log(`comparing `, A[i], A[j], A[k]);
        if (A[i] + A[j] > A[k] && A[i] + A[k] > A[j] && A[k] + A[j] > A[i]) {
          count++;
        }
        k++;
      }
      j++;
    }
  }
  return count;
}
A = [10, 2, 5, 1, 8, 12];
console.log(`countTriangles = `, countTriangles(A));

function countSlices(A) {
  //this is the basic concept of caterpiller - counting all the slices in a n array
  let j = 0;
  let count = 0;
  let dif = 0;
  for (let i = 0; i < A.length; i++) {
    //this while loop performs the magic - all getting all the slice for the first element i=0 and
    //we then use that to compute for others with prefixsum (j-i) plus count
    while (j < A.length) {
      j++;
    }
    dif = j - i; //prefixSum- to get the remaining slice; deduct the starting position
    //and add it up as prefixSum -- if you have been through the numbers, you dont need to do a while loop on them again
    count += dif;
  }
  return count;
}
//A = [3, 4, 5, 6];
//console.log(`countSlices = `, countSlices(A));

function countdistinct(A, M) {
  let visited = Array(M + 1).fill(0); //you can always use this secondary array to know if a particular
  //element of the main array has been seen or visited before or not when scanning through the array
  let front = 0;
  let N = A.length;
  let total = 0;
  //
  for (let back = 0; back < N; back++) {
    console.log(back);
    console.log(visited);
    while (front < N && visited[A[front]] != 1) {
      visited[A[front]] = 1;
      front += 1;
      console.log("stack is now ", visited, "and count is now", front);
      //console.log(`back: ${i} front: ${j} and the count is ${count}`)
    }
    current = front - back; //prefixSum- to get the remaining slice; deduct the starting position
    total += current; //and add it up as prefixSum -- if you have been through the numbers, you dont need to do a while loop on them again
    console.log("now total =", total, "and back is still", back);
    visited[A[back]] = 0;

    if (total > 1000000000) return 1000000000;
  }
  return total;
}
M = 6;
//A = [3, 9, 4, 5, 5, 2];
//A = [3, 4, 5, 5, 2];

//console.log(countdistinct(A, M));

function distinctSlice(A) {
  let len = A.length;
  let count = 0,
    single = 0,
    j = 0;
  for (let i = 0; i < len; i++) {
    if (A[i] <= M) single++;
    while (j + 1 < len && A[j] != A[j + 1] && A[j] <= M && A[j + 1] <= M) {
      count++;
      j++;
      //i++
      console.log(`back: ${i} front: ${j} and the count is ${count}`);
    }
    console.log("now back =", i + 1);
    j = i + 1;
  }
  return single + count;
}

//find the contiguous subsequence whose sum of elements equals s.
//For example, in the following sequence we are looking
//for a subsequence whose total equals s = 12.
function caterpillar(A, s) {
  let len = A.length;
  let front = 0,
    total = 0;
  //for (back in A):
  for (let back = 0; back < len; back++) {
    console.log(front);
    while (front < len && total + A[front] <= s) {
      total += A[front];
      front += 1;
      console.log(`back: ${back} front: ${front} and the total is ${total}`);
    }
    if (total == s) return front;
    total -= A[back];
    console.log("new total", total);
  }
  // return 'none'
}
s = 12;
A = [6, 2, 7, 4, 1, 3, 6];
//console.log(caterpillar(A, s))

function stoneWall(H) {
  stack = [];
  stack.push(H[0]);
  count = 0;
  for (let i = 1; i < H.length; i++) {
    if (H[i] < stack[stack.length - 1]) {
      stack.push(H[i]);
    } else {
      //stack.push(H[i])
      while (H[i] > stack[stack.length - 1]) {
        count++;
        stack.pop();
      }
    }
  }
  return stack.length + count;
}
//H = [8, 8, 5, 7, 9, 8, 7, 4, 8]
//console.log(stoneWall(H))

function fish(A, B) {
  let eater = [];
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] == 1) {
      eater.push(A[i]);
    } else {
      while (eater.length != 0) {
        if (A[i] > eater[eater.length - 1]) {
          eater.pop();
          count++;
        } else {
          count++;
          break;
        }
      }
    }
  }
  return A.length - count;
}
//A = [4, 0, 0, 5, 1]
//let A = [4, 3, 2, 1, 5]
//let A = [0, 1]
//let B = [1, 1]
//let B = [0, 1, 0, 1, 1]
//console.fish(test(A, B))

//MAX CONSECUTIVE SUBSET SUM
function maxSubSetSum(A, n) {
  let p2 = n - 1;
  let sum = 0;
  let max_sum = 0;
  for (let i = 0; i < n; i++) {
    //console.log(i + 1)
    sum += A[i];
  }
  max_sum = sum;
  console.log(max_sum);
  for (let i = 1; i < A.length - 2; i++) {
    if (p2 + i == A.length) break;
    sum = sum - A[i - 1] + A[p2 + i];
    if (sum > max_sum) max_sum = sum;
    console.log("sum ", sum, "max_sum ", max_sum);
    //max_sum = sum
  }
  return max_sum;
}
//let A = [4, 2, 1, 6, 2]
//n = 4

//console.log(maxSubSetSum(A, n))

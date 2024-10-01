//Given an array, find if it contains a contiguous subsequence whose sum of elements equals s.

let A = [6, 2, 7, 4, 1, 3, 6];
let s = 12;

function sumup(A, s) {
  for (let i = 0; i < A.length; i++) {
    console.log(`i = `, i);
    let front = i;
    let total = 0;
    //i < A.length &&
    while (total + A[front] <= s) {
      total += A[front];
      front += 1;
      console.log(`front is now `, front, "and total is", total);
      if (total === s) {
        return true;
      }
    }
  }
  return false;
}

function sumup2(A, s) {
  let front = 0;
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    console.log(`i = `, i);
    //i < A.length &&
    while (total + A[front] <= s) {
      total += A[front];
      front += 1;
      console.log(`front is now `, front, "and total is", total);
      if (total === s) {
        return true;
      }
    }
    total -= A[i];
  }
  return false;
}

console.log(`sumup = `, sumup2(A, s));

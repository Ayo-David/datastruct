function twoSum(A, T) {
  let B = new Map();
  let len = A.length;
  for (let i = 0; i < len; i++) {
    if (B.has(A[i])) return [B.get(A[i]), i];
    B.set(T - A[i], i);
    console.log(B);
  }
}

//using {} as the hash table
//Note: anytime you are using object, dont assign i=0 - it will always see 0 as
//undefined in an object
function twoSum2(A, T) {
  let B = {};
  let len = A.length;
  for (let i = 0; i < len; i++) {
    if (B[A[i]]) return [B[A[i]] - 1, i];
    B[T - A[i]] = i + 1; //we used i+1 bcos of the above reason
    console.log(B);
  }
}
A = [2, 11, 7, 15];
T = 9;
console.log(twoSum2(A, T));

function PerMissing(A) {
  let B = new Set();
  for (let a of A) {
    B.add(a);
    console.log(B);
  }
  let len = A.length;
  for (let i = 0; i < len; i++) {
    if (!B.has(i + 1)) return i + 1;
  }
  return len + 1;
}
//A = [2, 1, 3, 4]
//console.log(PerMissing(A))

const solution = (array) => {
  function merge(left, right) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }

    return merged.concat(left.slice(i)).concat(right.slice(j));
  }

  function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }

    let middleIndex = Math.floor(array.length / 2);

    let left = array.slice(0, middleIndex);

    let right = array.slice(middleIndex);

    return merge(mergeSort(left), mergeSort(right));
  }

  return mergeSort(array);
};

//console.log(`solution = `, solution([9, 6, 7, 4, 7, 2, 2, 4, 2, 3, 7, 7]));

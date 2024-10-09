//how to convert a Set to an array - use Array.from(set)
//convert string to an array using array.split('')

//There are some people in a meeting hall, everyone is wearing a t-shirt in which a number is written on his t-shirt.
//We asked some of these people how many people other than themselves are wearing a T-shirt with the same number.
// In array asked, asked[i] means from ith person has been asked and that person gave answer for that.
//Given the array, return the minimum number of people in the meeting hall with Javascript
//eg [1,4,1] output = 7
//using object

function minimumPeople(A) {
  let B = {};
  for (let a of A) {
    if (B[a + 1]) {
      B[a + 1]++;
    } else {
      B[a + 1] = 1;
    }
  }
  let sum = 0;
  for (let b in B) {
    let int = parseInt(b); //convert string to integer
    //let int = Number(b); //convert string to integer

    let div = B[b] / int;
    console.log(`B = `, b, B[b], div, sum);
    sum += int * Math.ceil(div);
  }
  return sum;
}

//A = [1, 2, 1, 2, 3, 2, 2];

A = [2, 2, 2, 2, 2, 2, 2, 3];
console.log(`minimum = `, minimumPeople(A));

//using Map - Map works exactly like using Object as hash table - it can contain key and value
//the major difference btw map and object is that oject keys are string but map key could be any datatype
// Differences between Map and Object
// Key Types: Objects only support strings and symbols as keys, while Map allows any type.
// Order: Map preserves insertion order, whereas an object does not guarantee order in most cases.
// Performance: Map can be more efficient than objects for frequent additions and deletions when using non-string keys.
// Map is useful when you need to use non-string keys or maintain the order of the entries.
function minimumPeople2(A) {
  let map = new Map();
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i])) {
      map.set(A[i], map.get(A[i]) + 1);
    } else {
      map.set(A[i], 1);
    }
  }
  console.log(`map = `, map);
  let sum = 0;
  //itereate through MAp just like an Array []
  for (let [k, v] of map) {
    console.log(`log = `, k, v);
    sum += (k + 1) * Math.ceil(v / (k + 1));
  }
  return sum;
}

//console.log(`minimum = `, minimumPeople2(A));

function matrixSpiral(m) {
  let top = 0;
  let bottom = m.length - 1;
  let right = m[0].length - 1;
  let left = 0;

  let ans = [];
  while (top <= bottom && left <= right) {
    for (let i = top; i <= bottom; i++) {
      ans.push(m[i][left]);
    }
    left++;
    for (let i = left; i <= right; i++) {
      ans.push(m[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      ans.push(m[i][right]);
    }
    right--;
    for (let i = right; i >= left; i--) {
      ans.push(m[top][i]);
    }
    console.log(`and = `, ans);
    top++;
  }
  return ans;
}

m = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
//console.log(`matrixSpiral = `, matrixSpiral(m));

function primeSet(a) {
  let primeSet = [];
  let vector = {};
  function isPrime(n) {
    //any number <= 1 is not a prime number, prime number starts from 2...
    if (n <= 1) return false;
    //if any number from 2 upward divides the given number, then it's not a prime number
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  //note 1 is not a Prime number
  for (let i = 2; i < a; i++) {
    if (!vector[i]) {
      if (isPrime(i)) {
        let num = a - i;
        if (isPrime(num)) {
          primeSet.push([i, num]);
          vector[num] = 1;
        }
        //console.log(`vector = `, vector);
      }
    }
  }
  return primeSet;
}

//a = 10;
//console.log(`primeSet = `, primeSet(a));

function sumofSquares(a) {
  let map = new Map();
  let count = 0;

  for (let i = 1; i <= a; i++) {
    map.set(i, i * i);
  }

  for (let i = 1; i <= a - 2; i++) {
    //ends before the last 2
    let num1 = i * i;
    for (let j = i + 1; j <= a - 1; j++) {
      //ends before the last one
      let num2 = j * j;
      let sum = num1 + num2;
      if (map.has(Math.sqrt(sum))) {
        console.log(`found = `, i, j, map.get(Math.sqrt(sum)));
        count += 2;
        break;
      }
    }
  }
  return count;
}

//console.log(`sumofSquares = `, sumofSquares(a));

function sumofSquares(a) {
  let A = a.toString();
  let hash = new Set();
  let count = 0;
  for (let i = 1; i <= a; i++) {
    hash.add(i * i);
  }

  let B = Array.from(hash); //this is how to convert a Set to an array
  //you can also do for(let a of Set) or Set.forEach((a)=>console.log(a)) of [...Set].forEach((a)=>console.log(a))
  let n = B.length;
  console.log(`B = `, B);
  for (let i = 1; i <= n - 2; i++) {
    for (let j = 1; j <= n - 1; j++) {
      let C = B[i] + B[j];
      //console.log(`C = `, C);
      if (hash.has(C)) {
        count++;
      }
    }
  }
  return count;
}
//console.log(`sumofSquares = `, sumofSquares(10));

S = "xoooxo";
function xoPoints(S) {
  let countX = 1;
  let countO = 0;
  let sum = 0;
  let max = 0;
  let idx = S.split("").indexOf("x");
  // if (S[0] == "x") {
  //   countX = 1;
  // }
  for (let i = idx + 1; i < S.length; i++) {
    if (S[i] == "o") {
      countO++;
    }
  }
  max = countX + countO;
  for (let i = idx + 1; i < S.length; i++) {
    if (S[i] == "x") {
      countX++;
    } else {
      countO--;
    }
    sum = countX + countO;
    max = Math.max(max, sum);
  }

  return max;
}

console.log(`xoPoints = `, xoPoints(S));

//Given a string find the length of the longest substring without repeating characters.
//Example:
//Input: s “fgcfagcgg” fgccgcgbd
//Output: 3
//Explanation: The answer is “fgc”, with the length of 3.
//Constraints:
//0s.length < 5 104

function countLongest(S) {
  let hash = {};
  let count = 0;
  let right = 0;
  let max = 0;
  for (let i = 0; i < S.length; i++) {
    right = i;
    while (right < S.length) {
      if (!hash[S[right]]) {
        hash[S[right]] = 1;
      } else {
        hash[S[right]]++;
      }
      if (hash[S[right]] == 1) {
        count++;
        right++;
      } else {
        max = Math.max(count, max);
        hash = {};
        count = 0;
        break;
      }
    }
  }
}
let s = "({}[]){}";
//or '({}[])' or '({}[)'
function validString(s) {
  let stack = [];
  let S = s.split("");
  for (let i = 0; i < S.length; i++) {
    if (S[i] == "(" || S[i] == "[" || S[i] == "{") {
      stack.push(S[i]);
      console.log(stack);
    } else {
      let last = stack[stack.length - 1];
      if (
        (last == "(" && S[i] == ")") ||
        (last == "[" && S[i] == "]") ||
        (last == "{" && S[i] == "}")
      ) {
        stack.pop();
      }
    }
  }

  if (stack.length == 0) return "Valid";
  return "Invalid";
}

//console.log(`valid string = `, validString(s));

//A = [2, 2, 2, 2, 2, 2, 2, 3];

function minPeople(A) {
  let map = new Map();
  for (let a of A) {
    if (map.has(a)) {
      let get = map.get(a);
      map.set(a, get + 1);
    } else {
      map.set(a, 1);
    }
  }

  let count = 0;
  for (let [k, v] of map) {
    console.log(k, v);
    let occurence = Math.ceil(v / (k + 1));
    count += (k + 1) * occurence;
  }
  return count;
}

//console.log(`minPpl = `, minPeople(A));
//A = [1, -2, 6];
function maxSum(A) {
  let max = A[0];
  let slice = A[0];

  for (let i = 1; i < A.length; i++) {
    let newSlice = slice + A[i];
    slice = Math.max(newSlice, A[i]);
    max = Math.max(max, slice);
  }
  return max;
}

//console.log(`maxSum = `, maxSum(A));
A = [4, 1, 4, 2];
A = [2, 3, 4, 5];
function convert2Perm(A) {
  let N = A.length;
  A.sort((a, b) => a - b);

  let totalCost = 0;

  // Iterate and calculate the total cost to transform each element to its target value
  for (let i = 0; i < N; i++) {
    totalCost += Math.abs(arr[i] - (i + 1));
  }

  return totalCost;
}

function minDistanceToChar(s, t) {
  const n = s.length;
  const d = new Array(n).fill(Infinity);

  // Traverse from left to right
  let lastPos = -Infinity; // Initially no 't' found
  for (let i = 0; i < n; i++) {
    if (s[i] === t) {
      lastPos = i; // Update the last seen 't' position
    }
    d[i] = Math.abs(i - lastPos);
  }

  // Traverse from right to left
  lastPos = Infinity; // Reset for right-to-left traversal
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === t) {
      lastPos = i; // Update the last seen 't' position
    }
    d[i] = Math.min(d[i], Math.abs(i - lastPos)); // Get the minimum distance
  }

  return d;
}

// Example usage:
//const s = "loveleetcode";
//const t = "e";
//console.log(minDistanceToChar(s, t)); // Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

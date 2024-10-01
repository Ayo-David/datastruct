// Given a sequence of n strings, the task is to check if any two similar words come together and then destroy each other then print the number of words left in the sequence after this pairwise destruction.

// Examples:

// Input : ab aa aa bcd ab
// Output : 3
// As aa, aa destroys each other so,
// ab bcd ab is the new sequence.

// Input :  tom jerry jerry tom
// Output : 0

function removeSimilar(s) {
  let A = s.split(" ");
  let stack = [];
  stack.push(A[0]);
  for (let i = 1; i < A.length; i++) {
    //for(let a of A ){
    let l = stack.length - 1;
    if (A[i] == stack[l]) {
      stack.pop();
      //i = i + 2;
    } else {
      stack.push(A[i]);
    }
  }

  return stack.length;
}

let s = "ab aa aa bcd ab";
//let s = "tom jerry jerry tom";

//console.log(`removeSimilar = `, removeSimilar(s));

function removeSimilar2(a) {
  let s = a.split(" ");
  let n = s.length;
  for (i = 0; i < n - 1; ) {
    console.log(`log = `, s[i], s[i + 1]);
    if (s[i] == s[i + 1]) {
      s.splice(i, 2);

      //s.slice(i, 1);
      console.log(`s = `, s);
      if (i > 0) i--;
      n -= 2; //another logic for reducung n (length of the array within for loop)
    } else {
      i++; //another logic for incrementing a for-loop
      //console.log(`now i = `, i);
    }
  }
  return s.length;
}

console.log(`removeSimilar = `, removeSimilar2(s));

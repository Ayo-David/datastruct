function solution(A) {
  //usin Array
  //let S = new Set()
  let len = A.length
  let B = []
  //if(!A.includes(1)) return 1 
  for (i = 0; i <= A.length - 1; i++) {

    if (A[i] >= 1) {
      B[A[i]] = A[i];
    }
  }
  console.log(`foo = `, B)
  if (B) {
    B.sort
  } else {
    return 1
  }
  let smallestMissing = 1
  for (let i = 0; i < B.length; i++) {
    //if (!B.includes(i + 1)) return i + 1
    console.log(`B = `, B[i])
    if (B[i] == smallestMissing) {
      smallestMissing = i + 1
    }

    if (B[i] + 1 != B[i + 1]) return i + 1
  }
  return smallestMissing
}

console.log(`Answer = `, solution([1, 2, 3])) 
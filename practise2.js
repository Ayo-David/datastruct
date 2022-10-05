//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of 
//each fraction on a new line with  places after the decimal.
//Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
//though answers with absolute error of up to  are acceptable.

//arr = [-4,-5,1, 4,-3, 0, 6]

function plusMinus(arr) {
  // Write your code here
  let countpos = 0
  let countneg = 0
  let count0 = 0
  let len = arr.length
  for (let i of arr) {
    i > 0 ? countpos++ : i == 0 ? count0++ : countneg++
  }
  console.log((countpos / len).toFixed(6))
  console.log((countneg / len).toFixed(6))
  console.log((count0 / len).toFixed(6))

}

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
//arr = [1 2 3 4 5]
function miniMaxSum(arr) {
  // Write your code here
  let sort = arr.sort()
  let sum = 0
  let len = arr.length
  for (let i = 0; i < len - 1; i++) {
    sum += arr[i]
  }
  let sumMax = sum + arr[len - 1] - arr[0]
  console.log(`${sum} ${sumMax}`)
}

//Given an array of integers, where all elements but one occur twice, find the unique element.
//Example
//The unique element is .

a = [1, 2, 3, 1, 2, 3, 4]

function lonelyintegers(a) {
  // Write your code here
  let A = {}
  for (let i = 0; i < a.length; i++) {
    if (A[a[i]]) {
      A[a[i]]++
    } else {
      A[a[i]] = 1
    }
  }
  console.log(A)
  for (let i in A) {
    if (A[i] == 1) {
      return i
      //break
    }
  }



}

function lonelyinteger(a) {
  // Write your code here
  let A = []
  for (let i = 0; i < a.length; i++) {

    let unique = A.filter(item => item === a[i])
    if (unique.length == 0) {
      A.push(a[i])
    } else {
      return a[i]
    }

  }

}
//console.log(lonelyinteger(a))

const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
//console.log(uniqueAges)


function calculateDiagonals(matrix) {
  var n = matrix.length;
  var diag1 = 0;
  var diag2 = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // an element from the main diagonal
      if (i === j) {
        diag1 += matrix[i][j];
      }
      // an element from the counterdiagonal
      if (i + j === n - 1) {
        diag2 += matrix[i][j];
      }
    }
  }
  return Math.abs(diag1 - diag2);
}


function caesarCipher(s, k) {
  // Write your code here
  let A = [...'abcdefghijklmnopqrstuvwxyz']
  let R = [...A]
  let S = []
  for (let i = 0; i < k; i++) {
    R.push(R.shift(R[i]))
  }

  for (let j of s) {

    let index = A.indexOf(j.toLowerCase())
    //console.log(index)
    if (j.toLowerCase() == j && j != '-') {

      S.push(R[index])
    } else if (j.toLowerCase() != j && j != '-') {
      S.push(R[index].toUpperCase())
    } else {

      S.push('-')
    }
  }

  return S.join('')
}

/////////////////////////

function caesarCipher2(s, k) {
  // Write your code here
  const lowerA = "abcdefghijklmnopqrstuvwxyz".split('')
  //const lowerB = [...lowerA]
  let rotate = [...lowerA]
  let cipher = []

  for (let i = 0; i < k; i++) {
    rotate.push(rotate.shift())
  }
  console.log(rotate.join(''))
  for (let j = 0; j < s.length; j++) {
    if (lowerA.includes(s[j].toLowerCase())) {

      if (s[j] == s[j].toUpperCase()) {
        let a = lowerA.indexOf(s[j].toLowerCase())
        console.log(s[j].toLowerCase())
        cipher.push(rotate[a].toUpperCase())
        console.log(rotate[a].toUpperCase())
      } else {
        let a = lowerA.indexOf(s[j])
        cipher.push(rotate[a])

      }
    } else {
      cipher.push(s[j])
    }

  }
  return cipher.join('')
}

console.log(caesarCipher2('middle-Outz', 2))

function caesarCipher3(s, k) {
  const lowerA = "abcdefghijklmnopqrstuvwxyz"
  const upperA = lowerA.toUpperCase()

  const res = s.split("").map(c => {
    if (lowerA.includes(c)) {
      return lowerA[(lowerA.indexOf(c) + k) % 26]
    } else if (upperA.includes(c)) {
      return upperA[(upperA.indexOf(c) + k) % 26]
    } else {
      return c
    }
  })

  return res.join("")
}


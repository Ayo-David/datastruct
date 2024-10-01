// Given a matrix where every row is sorted in increasing order. Write a function that finds and returns a common element in all rows. If there is no common element, then returns -1.
// Example:

let mat = [
  [1, 2, 3, 4, 5],
  [2, 4, 5, 8, 10],
  [3, 5, 7, 9, 11],
  [1, 3, 5, 7, 9],
];
// Output: 5

function commonEle(mat) {
  let m = mat.length;
  let n = mat[0].length;
  for (let a of mat[0]) {
    console.log(`now for  = `, a);
    let count = 1;
    for (let i = 1; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (a == mat[i][j]) {
          count++;
          console.log(a, `is now found in line`, i);
          break;
        }
      }
    }
    if (count === m) {
      console.log(`count = `, count);
      return a;
    }
  }
  return -1;
}

//console.log(`log = `, commonEle(mat));

//Using Binary search
function commonEle(mat) {
  function binarySearch(A, a) {
    let left = 0;
    let right = A.length - 1;
    while (left <= right) {
      //note this has to always be <=
      let mid = Math.floor((right + left) / 2);
      //console.log(`left, right = `, left, right, a, A[mid]);
      //console.log(`mid = `, mid);
      if (a > A[mid]) {
        left = mid + 1;
      } else if (a < A[mid]) {
        right = mid - 1;
      } else if (a == A[mid]) {
        return true;
      }
    }
    return false;
    //[1, 2, 3, 4, 5]
  }
  let m = mat.length;
  let n = mat[0].length;
  for (let a of mat[0]) {
    console.log(`now for  = `, a);
    let count = 1;
    for (let i = 1; i < m; i++) {
      //binary search
      let search = binarySearch(mat[i], a);
      console.log(`search is = `, search);
      if (search) {
        count++;
        console.log(`count = `, count);
      }
      //   for (let j = 0; j < n; j++) {
      //     if (a == mat[i][j]) {
      //       count++;
      //       console.log(a, `is now found in line`, i);
      //       break;
      //     }
      //   }
    }
    if (count === m) {
      console.log(`count = `, count);
      return a;
    }
  }
  return -1;
}

//console.log(`log = `, commonEle(mat));

//Search in a row wise and column wise sorted matrix
//search the matrix for a given number
//since both row and column are sorted this solution use
//elimination principle to to search only elements that
//are greater than the given element. In essence start from top
//right and jump to nex row if that element is not less that element
//being searched for

function searchMat(mat, n, x) {
  // set indexes for top right
  let i = 0,
    j = n - 1;

  while (i < n && j >= 0) {
    if (mat[i][j] == x) {
      console.log("Element found at (" + i + ", " + j + ")");
      return;
    }
    console.log("Now at (" + i + ", " + j + ")", mat[i][j]);
    if (mat[i][j] > x) j--;
    // if mat[i][j] < x
    else i++;
  }

  console.log("Element not found");
  return; // if ( i==n || j== -1 )
}
// driver program to test above function

let matt = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 28, 37, 48],
  [32, 33, 39, 50],
];
//console.log(`Search Matt = `, searchMat(matt, 4, 29));

function spiralPrint(m, n, a) {
  // Initialize boundaries
  let top = 0,
    bottom = m - 1,
    left = 0,
    right = n - 1;

  // Iterate until all elements are printed
  while (top <= bottom && left <= right) {
    // Print top row from left to right
    for (let i = left; i <= right; ++i) {
      console.log(a[top][i] + " ");
    }
    top++;

    // Print right column from top to bottom
    for (let i = top; i <= bottom; ++i) {
      console.log(a[i][right] + " ");
    }
    right--;

    // Print bottom row from right to left (if exists)
    if (top <= bottom) {
      for (let i = right; i >= left; --i) {
        console.log(a[bottom][i] + " ");
      }
      bottom--;
    }

    // Print left column from bottom to top (if exists)
    if (left <= right) {
      for (let i = bottom; i >= top; --i) {
        console.log(a[i][left] + " ");
      }
      left++;
    }
  }
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Function call to print matrix elements in spiral order
//console.log(`spiral = `, spiralPrint(matrix.length, matrix[0].length, matrix));

function matrixDiagonals(mat) {
  let n = mat.length;
  let m = mat[0].length - 1;
  let q = m;
  let diagonal1 = [];
  let diagonal2 = [];
  //method1 - o(n*n)
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j <= m; j++) {
  //       if (i === j) {
  //         diagonal1.push(mat[i][j]);
  //       }
  //       if (j == q) {
  //         //if ((i + j) == (n - 1)) { this is another method - at the point where n-1 is i+j
  //         diagonal2.push(mat[i][j]);
  //       }
  //     }
  //     --q;
  //   }

  //more efficient method o(n)
  for (let i = 0; i < n; i++) {
    diagonal1.push(mat[i][i]);
    diagonal2.push(mat[i][m--]);
    //diagonal2.push(mat[i][m - i]);//another method
  }
  return [diagonal1, diagonal2];
}

//console.log(`matrixDiagonals = `, matrixDiagonals(matt));

function printSpiral(mat) {
  let top = 0;
  let bottom = mat.length - 1;
  let left = 0;
  let right = mat[0].length - 1;

  while (top <= bottom && left <= right) {
    //our loop L-R, T-B, R-L, B-T
    for (let i = left; i <= right; i++) {
      console.log(mat[top][i], " ");
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      //console.log(`log = `, right, i);
      console.log(mat[i][right], " ");
    }
    right--;
    for (let i = right; i >= left; i--) {
      console.log(mat[bottom][i], " ");
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      console.log(mat[left][i], " ");
    }
    left++;
  }
}
console.log(`printSpiral = `, printSpiral(mat));

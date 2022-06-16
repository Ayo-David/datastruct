// Input: arr = [3,1,2,4,3]
// Output: 1
// Explanation:
// For index 0, leftSum = 3, rightSum = 10. Absolute difference = 7.
// For index 1, leftSum = 4, rightSum = 9. Absolute difference = 5.
// For index 2, leftSum = 6, rightSum = 7. Absolute difference = 1.
// For index 3, leftSum = 10, rightSum = 3. Absolute difference = 7.

function minDiff(A) {
    let left = A[0]
    let right = 0
    let diff = 0
    let len = A.length
    //let min = Number.POSITIVE_INFINITY
    for (let i = 1; i < len; i++) {
        right = right + A[i]
    }

    diff = Math.abs(left - right)
    let min = diff
    for (let i = 1; i < len - 1; i++) {
        right = right - A[i]
        left = left + A[i]
        diff = Math.abs(left - right)
        //console.log('right', right)
        //console.log('diff', diff)
        //console.log('left', left)
        min = Math.min(diff, min)
    }

    return min
}
A = [3, 1, 2, 4, 3]
console.log(minDiff(A))


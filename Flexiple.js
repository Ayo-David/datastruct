function twoSum(A, T) {
    let B = new Map()
    let len = A.length
    for (let i = 0; i < len; i++) {
        if (B.has(A[i])) return [B.get(A[i]), i]
        B.set(T - A[i], i)
        console.log(B)
    }
}
//A = [2, 11, 7, 15]
//T = 9
//console.log(twoSum(A, T))

function PerMissing(A) {
    let B = new Set();
    for (let a of A) {
        B.add(a)
        console.log(B)
    }
    let len = A.length
    for (let i = 0; i < len; i++) {
        if (!B.has(i + 1)) return (i + 1)
    }
    return len + 1
}
A = [2, 1, 3, 4]
console.log(PerMissing(A))
// Write a function:

// class Solution { public int solution(int A, int B, int K); }

// that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

// { i : A ≤ i ≤ B, i mod K = 0 }

// For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.




function countDiv(A, B, K) {
    console.log(A % K)
    let C;

    C = Math.floor(B / K) - Math.floor(A / K)
    if (A % K == 0) {
        C++
    }
    return C;

}



console.log(countDiv(6, 11, 2));
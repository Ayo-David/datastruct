// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// Write a function:

// function solution(N, A);

// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

// Result array should be returned as an array of integers.

// For example, given:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].

let A = [3, 4, 4, 6, 1, 6, 4]
let N = 5
//O(n*M) solution gives 77%
function maxCounter(N, A) {

    //let counter = [0, 0, 0, 0, 0];
    let counter = Array(N).fill(0)
    for (let a of A) {
        console.log(counter);
        if (a <= N) {
            //for (let i = 0; i < N; i++) {
            //if (i + 1 == a)
            counter[a - 1] = counter[a - 1] + 1;
            // }
            console.log('After increment:', counter);
        } else if (a == N + 1) {
            let max = Math.max(...counter);
            // for (let j = 0; j <= counter.length - 1; j++) {
            //     counter[j] = max;
            // }
            counter.fill(max);
            console.log('After maximum increase:', counter)
        }

    }
    return counter;

}
//O(N+M) solution gives 100%
function maxCounter2(N, A) {
    counter = new Array(N).fill(0);
    maxCount = 0;
    currMax = 0;
    for (let a of A) {
        console.log(counter);
        if (a <= N) {
            //at this point add maxCount to counter[a-1]
            if (maxCount > counter[a - 1]) counter[a - 1] = maxCount;
            console.log('Now we have a new MaxCount:', counter);
            counter[a - 1] += 1;
            console.log('After increment:', counter);
            //change current max if there's a higher value in the counter
            if (currMax < counter[a - 1])
                currMax = counter[a - 1]
        } else {
            //we wont implement this now until the end of our loop
            maxCount = currMax;
        }


    }
    for (i = 0; i <= counter.length - 1; i++) {
        if (counter[i] < maxCount) counter[i] = maxCount;
        console.log('We just add the max all through:', counter);
    }
    return counter
}

console.log(maxCounter2(N, A));
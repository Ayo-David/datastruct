// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function smallest(A) {
    let numbers = [];
    let smallestMissing = 1;
    for (i = 0; i <= A.length - 1; i++) {

        if (A[i] >= 1) {
            numbers[A[i]] = A[i];
        }
    }
    if (numbers) {
        numbers.sort;
    } else {
        return smallestMissing;
    }
    //change all the unwanted numbers to 1 and then flip through the array
    //use this method to flip through the sorted main array...take note of the repeated number
    for (i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] == smallestMissing) {
            smallestMissing = i + 1
        }
    }
    return smallestMissing;

}


//let A = [1, 3, 6, 4, 1, 2];
A = [7,-2,3,1,2,20,-5]
//let A = [1, 2, 3, 4]
//let A = [-1, -3] //1

function smallestMissing2(A) {

    let numbers = A.length;
    let contain1 = 0;
    //let smallestMissing = 1

    A.forEach((a, i) => {
        //to cater for negative
        if (a == 1) {
            contain1 = 1
        } else if (a <= 0 || a > numbers) { //we dont want 0, -ve and any number > length
            A[i] = 1
        }

    });
    //[-3, -5]
    //it means 1 is not in the list -> 1 becomems the smallest
    if (contain1 == 0) return 1
    console.log('the numbers without anything < 0 or > length', A)

    A.forEach((a, i) => {
        //search for index of a-1 (to make it zero base)
        let searchfor = Math.abs(a) - 1;
        if (A[searchfor] > 0) A[searchfor] = - A[searchfor];
        console.log(A)
        //console.log(A[searchfor - 1])
    });
    //console.log('after mapping with index make all the available -ve', A)

    //WE CANT USE FOREACH BCOS IT ALWAYS RETURNS UNDEFINE EXCEPT WE EQUATE OUR RETURN VALUE INTO A VARIABLE
    // A.forEach((a, i) => {
    //     if (a > 0)
    //         // return i + 1
    //         smallestMissing = i + 1
    // });
    for (i = 0; i <= numbers - 1; i++) {
        if (A[i] > 0)
            return i + 1
    }
    //in case of [1,2,3]
    return numbers + 1;

}

//console.log(smallestMissing2(A))

const prefixSum = arr => {

    // Get the size of the array.
    const n = arr.length

    // Create an empty array of the same size as input.
    const result = new Array(n)

    // Initialize the first position of the array with the same value as the first item of the item.
    result[0] = arr[0]

    // Go through the input array, starting in the position 0, to the n.
    for (let i = 1; i < n; i++)

        // Assign the result of the previous value and the value in the current position in the input array.
        result[i] = result[i - 1] + arr[i]

    return result
}

const prefixTestArray = [2, 4, 6, 8, 10, 12, 14]

console.log(prefixSum(prefixTestArray))

const suffixSum = arr => {
    const n = arr.length
    const result = new Array(n)
    // Instead of assigning the first position, we assign the last with the last value of the input array.
    result[n - 1] = arr[n - 1]

    // Go through the input array, starting in the last position, until the first.
    for (let i = n - 2; i >= 0; i--) {

        result[i] = result[i + 1] + arr[i]
        console.log(result[i])
    }
    return result
}

const suffixTestArray = [2, 4, 6, 8, 10, 12, 14]

//console.log(suffixSum(suffixTestArray))



//PEAKS
A = [1, 4, 3, 4, 3, 3, 1, 2, 3, 4, 4, 2]
console.log(peakss(A))
function peakss(A) {
    let len = A.length
    let peaks = []
    for (i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    console.log(peaks)
    if (peaks.length == 0) return 0

    for (let blocklength = 3; blocklength <= A.length / 2; blocklength++) {

        let current_peak = 0
        let ok = true
        for (let blockstart = 0; blockstart < A.length; blockstart += blocklength) {
            let found_peak = false
            while (current_peak < peaks.length) {
                if (peaks[current_peak] < blockstart + blocklength) {
                    found_peak = true
                    current_peak++
                } else if (peaks[current_peak] >= blockstart + blocklength) {
                    break
                }
            }
            if (!found_peak) {
                ok = false;
                break
            }
        }
        if (ok) return A.length / blocklength
    }
    return 1
}
function peaks(A) {
    let len = A.length
    let peaks = []
    for (i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    //let n = peaks.length
    //let k = Math.ceil(len / n), peak_found = 0
    for (let size = 1; size <= len; size++) {
        //if (len % size == 0) continue; //continue if it is divisible by size
        if (len % size == 0) {
            let find = 0;
            let groups = len / size;
            for (let peak of peaks) {
                if (Math.floor(peak / size) > find)
                    break;
                if (Math.floor(peak / size) == find) find++;
            }
            if (find == groups) return groups;
        } //continue if it is divisible by size
        return 0;
    }
}
// for (p = n; p > 0; p--) {
//     if (len % size == 0){

//         block_size = len // size
//         found = Array(p).fill(false)
//         found_cnt = 0
//     } //if no remainder when you divide A.
//         for (peak in peaks){

//             block_nr = peak//block_size
//             if found[block_nr] == False:
//                 found[block_nr] = True
//                 found_cnt += 1
//         }
//         if found_cnt == size:
//             return size
// return 0

// for (j = 0; j < len - 1; j++) {
//     // m = j
//     //while (m <= k) {
//     if (peaks[p] == j && ) {
//         peak_found++
//         //break
//     }
//     if (j == k)
//         // m++
//         //}
//         //what about two peak found in this while loop
//         if (peak_found == n)
//             return peak_found
// }
//     }




//COINS
function coins(N) {
    let len = N.length
    let result = 0
    coin = Array(len + 1).fill(0)
    for (i = 1; i < len + 1; i++) {
        k = i
        console.log(`${k} before the while loop`)
        while (k <= len) {
            coin[k] = (coin[k] + 1) % 2 // if 0 is found it is change to 1 and if 1 is found change to 0
            console.log(`The coin is now ${coin} at point ${k}`)
            k += i
        }
        //if coin[i] has changed from 0 to 1, then add to result
        //we do this for each coin person at i, eg for i=1, we only check coin[1]
        result += coin[i]
        console.log('\n', result)
    }
    return result
}
//let N = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(coins(N))

//FLAGS
function flags(A) {

    let peaks = []
    //let peaks = A.map(i => 0)
    for (i = 1; i < A.length - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }


    if (peaks.length < 2) return peaks.length

    console.log(peaks)

    //the maximum flags we could ever have is square root of (last peak - first peak)

    let max_flag = Math.ceil(Math.sqrt(peaks[peaks.length - 1] - peaks[0])), max = 1
    for (let f = max_flag; f > 0; f--) {
        console.log('We have', f, ' flags')
        let flag_placed = 1
        let difference_sum = 0
        //[1, 3, 5, 10]
        //here we iterate through all the Peaks and see how many flags we can use up 
        for (i = 0; i < peaks.length - 1; i++) {
            let current_peak = peaks[i], next_peak = peaks[i + 1]
            let difference = Math.abs(next_peak - current_peak)
            if ((difference_sum + difference) >= f) {
                flag_placed++
                // max_flag--
                difference_sum = 0
                console.log('For Peak', peaks[i + 1], 'The new flag ', flag_placed)
            } else {
                difference_sum += difference
            }
            //We dont need to find max, once the availables flags has been fully used up
            //by the available peaks, break and return result 
            if (flag_placed == f) {
                console.log('No more flag\n')
                //break
                return flag_placed
            }




        }

        console.log('next peak...', f - 1, 'flags available')
        //We dont need to find max, once the availables flags has been fully used up
        //by the available peaks, break and return result 
        //max = Math.max(flag_placed, max)
    }
    //return max


}

//P = [1, 3, 5, 10]
//let A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
//console.log(flags(A))

//MINPERIMETERRECTANGLE
function minPerimeterTriangle2(N) {
    let b = 1, perimeter
    x = Math.floor(Math.sqrt(N))
    for (let a = x; a > 0; a--) {
        console.log(a)
        if (N % a == 0) {
            b = N / a
            perimeter = 2 * (a + b)
            console.log(`${a} and ${b} = ${perimeter}`)
            return perimeter
        }
    }

    return minPer
}
function minPerimeterTriangle(N) {
    let b = 1, perimeter
    let minPer = Number.MAX_VALUE
    //MAX_VALUE property has a value of approximately 1.79E+308, or 2^1024. 
    //Values larger than MAX_VALUE are represented as Infinity.
    for (let a = 1; a * a <= N; a++) {
        if (N % a == 0) {
            b = N / a
            perimeter = 2 * (a + b)
            console.log(`${a} and ${b} = ${perimeter}`)
            minPer = Math.min(minPer, perimeter)
        }
    }

    return minPer
}
//let N = 36
//console.log(minPerimeterTriangle2(N))


//COUNT FACTORS
function factors(N) {

    let result = 0, i = 1
    //each factor will have a symmetric divisor eg 2 and 12 in N =24
    while (i * i < N) {
        if (N % i == 0) result += 2
        i++
    }
    //eg if 6*6 == 36, 6 will appear once in the factors of N = 36
    if (i * i == N) result += 1
    return result
}
//N = 24, the function should return 8,  
//24 has 8 factors - 1, 2, 3, 4, 6, 8, 12, 24
//36 has 9 factors -1, 2, 3, 4, 6, 8, 12, 18, 36
//N = 1
//console.log(factors(N))

//MAX DOUBLE SUM
function maxDoubleSum(A) { //this is not correct yet
    left = max = 0
    right = 0
    len = A.length
    if (A.lenth < 4) return 0
    for (let i = 2; i < A.length - 1; i++) {
        right += A[i]
        //console.log
    }
    let rightT = right
    //midY = A[1] = 1
    for (let i = 1; i < len; i++) {
        sum = left + right
        rlen = len - 1
        while (rightT > 0) {
            max = Math.max(sum, max)
            rlen--
            //console.log(right, 'minus', A[rlen])
            //console.log('within while max is:', max, 'at mid:', i)
            rightT -= A[rlen]
            sum = left + rightT
        }
        left += A[i]
        console.log('left is increasing', left, 'sum is now', sum)
        right -= A[i + 1]
        max = Math.max(sum, max)
        console.log('other max is:', max, 'at mid:', i)
    }
    return max

}
//combinning the left and right
function maxDoubleSum2(A) { //most prefered 
    len = A.length
    max = 0


    //starting with 0, calculate the max sum from left i = 1 to i=len - 3
    //because it cant go beyond that point
    left = Array(len).fill(0)
    max_left = 0
    right = Array(len).fill(0)
    max_right = 0

    //a fun opportunity to use a double condition and indexes in a for loop
    //this is combinning for (let i = 1; i <= A.length - 3; i++ and let j = A.length - 2; j >= 2; j--) {
    //and also
    //going from right to left, start with  0, calculate the max sum from right i=len-2 to i= 2
    //because it cant go beyond that point  

    for (let i = 1, j = A.length - 2; j >= 2; i++, j--) {//i <= A.length - 3;
        //for (let i = 1; i <s=A.length - 2; i++) {
        max_left = Math.max(0, max_left + A[i])
        left[i] = max_left
        max_right = Math.max(0, max_right + A[j])
        right[j] = max_right
        //console.log(i)
    }

    //it can also be wrtten as
    // for (var i = 1, j = A.length-2; j >= 2; i++, j--) {
    //     //verify with 0, minimum max sum is 0 anyway
    //     sumsFromLeft[i] = Math.max(0, sumsFromLeft[i-1] + A[i]);
    //     sumsFromRight[j] = Math.max(0, sumsFromRight[j+1] + A[j]);
    // }

    console.log(left)
    console.log(right)

    for (let i = 1; i < A.length - 1; i++) {
        console.log(left[i - 1], right[i + 1])
        max = Math.max(max, left[i - 1] + right[i + 1])
    }
    return max
}
function maxDoubleSum3(A) {
    len = A.length
    max = 0

    //if (A.lenth < 4) return 0
    //starting with 0, calculate the max sum from left i = 1 to i=len - 3
    //because it cant go beyond that point
    left = Array(len).fill(0)
    max_left = 0
    for (let i = 1; i <= A.length - 3; i++) {
        //for (let i = 1; i <s=A.length - 2; i++) {
        max_left = Math.max(0, max_left + A[i])
        left[i] = max_left
        //console.log(max_right)
    }
    console.log(left)

    //going from right to left, start with  0, calculate the max sum from right i=len-2 to i= 2
    //because it cant go beyond that point  
    right = Array(len).fill(0)
    max_right = 0
    for (let i = A.length - 2; i >= 2; i--) {
        //for (let i = A.length - 2; i >= 1; i--) {
        max_right = Math.max(0, max_right + A[i])
        right[i] = max_right
        // console.log(max_left)
    }
    console.log(right)
    for (let i = 1; i < A.length - 1; i++) {
        console.log(left[i - 1], right[i + 1])
        max = Math.max(max, left[i - 1] + right[i + 1])
    }

    return max

}
//A = [3, 2, 6, -1, 4, 5, -1, 2]
//
//A = [3, 2, 5, -1, 4, 5] // [0, 2, 5, -1, 0 , 0 ] rep LEFT and [0,0,5,-1,4,0] rep RIGHT. 
//LEFT sum up in ---> direction, RIGHT sum up in <---- direction
//console.log(maxDoubleSum2(A))

//MAX SLICE SUM
function maxSliceSum(A) {
    let highest_sum = A[0]
    let highest = A[0]
    for (let i = 1; i <= A.length - 1; i++) {

        console.log('the highest so far', highest)
        console.log('the sum for comparison with ', A[i], ' is', (highest_sum + A[i]))
        //compare the current element with the new highest sum at that point (highest_sum + A[i])
        //if A[i] is greater make it the highest sum so far
        highest_sum = Math.max(A[i], highest_sum + A[i])
        //compare sum with the highest, if sum is greater make it the highest
        highest = Math.max(highest, highest_sum)

        console.log('and the highest sum at this point is: ', highest_sum, ' and the highest is now', highest, '\n========')
    }
    return highest
}
//for better understanding try this two examples here 
//(at any point whatever is lesser up to that point is discarded)
//A = [1, -2, 6] 
//A = [-1, -2, 6]
//A = [3, 2, -6, 4, 0]
//console.log(maxSliceSum(A))

//MAX PROFIT
function maxProfit2(A) {
    let days = A.length
    // If the number of days is zero or one, there
    // is no time to get profit.
    if (days < 2) return 0
    highest = A[days - 1]
    max_profit = 0
    for (i = days - 2; i >= 0; i--) {
        //for i in xrange(days-2, -1, -1):
        //highest-A[i] means the maximum
        //profit from current day to end.
        max_profit = Math.max(max_profit, highest - A[i])
        highest = Math.max(A[i], highest)
    }
    return max_profit
}
function maxProfit(A) {
    let len = A.length
    let highest = A[len - 1]
    let max = 0
    if (len < 2) return 0
    //it's better to start at len-2 because if you start at len-1, 
    //it will get to a point where it will A[i - 1] will go beyonnd the array
    for (i = len - 2; i >= 0; i--) {
        if (highest > A[i]) {
            diff = highest - A[i]
            if (diff > max) max = diff
        } else {
            highest = A[i]
        }
        //if A[i-1] is greater make it the highest
        //highest = Math.max(highest, A[i])
        //console.log(A[i - 1])
        //find the diff if diff is greater make it the max
        //max = Math.max(max, highest - A[i])
        //console.log(max)
    }
    return max
}
//let A = [23171, 21011, 21123, 21366, 21013, 21367]
//let A = [2, 10, 4, 2, 1, 7, 6, 4, 7, 3, 4]
//let A = [8, 3, 5, 6, 4, 7]
//console.log(maxProfit(A))
// leader = A[maxIndex]

// let equiLeader = 0
// let stack = []
// let stackIndex = -1
// for (let i = 0; i < A.length; i++) {

//     if (stack.length > (Math.floor(i / 2)) && (maxRepetition - stack.length > Math.floor((A.length - i) / 2))) {
//         equiLeader++
//     }
//     if (A[i] === leader) stack.push(i)

// }


//DOMINATOR
//my version of denominator2

function dominator2(A) {
    if (A.length === 1) return 0;
    let max = 1;
    let maxIndex = -1;
    let occurrence = new Object();
    for (let i = 0; i < A.length; i++) {
        if (occurrence.hasOwnProperty(A[i])) {
            occurrence[A[i]][0]++;
            if (occurrence[A[i]][0] > max) {
                if (occurrence[A[i]][0] > A.length / 2) {
                    max = occurrence[A[i]][0];
                    console.log(max)
                    maxIndex = occurrence[A[i]][1];
                    return maxIndex;
                }
            }
        } else {
            occurrence[A[i]] = new Array();

            occurrence[A[i]][0] = 1; //this is the counter of the element
            occurrence[A[i]][1] = i; //this is the index of the element
        }
    }

    return maxIndex;

}
//check why this return -1 for A = [2147483647]
function dominator(A) {
    store = {}
    highest = 1
    //indexes = []
    index = -1
    //USING ARRAY IN TO ACCESS INDEXES
    for (a in A) {
        if (store[A[a]]) {
            store[A[a]]++
            //if (store[A[a]] > highest) { //why is this neccessary

            if (store[A[a]] > A.length / 2) {

                highest = A[a]
                index = a
                //console.log(highest)
                //break;
                return parseInt(index)
            }
            //}
        } else {
            store[A[a]] = 1
            index = a
        }
        //index++
    }
    // for (i = 0; i < A.length; i++) {
    //     if (A[i] === highest)
    //         //indexes.push(i);
    //         return i
    // }
    //return indexes.join()
    return index
    //return parseInt(index);
}
//let A = [2147483647]
//let A = [2]
//let A = [3, 4, 3, 2, 3, -1, 3, 3]
//console.log(dominator(A))

//STONE WWALL - METHOD 2
function stonewall2(H) {
    stack = []
    count_block = 0
    last_block = 0

    for (h of H) {
        //if h is greater than lastblock, add it to the stack and increase
        //the counter, set h as the lastblock now
        if (h > last_block) {
            stack.push(h)
            count_block++
            last_block = h
        } else {
            //while h is less than the blocks in the stack, 
            //remove (eat up those blocks in the stack)

            while (h < stack[stack.length - 1]) {
                stack.pop()
            }
            //after removing the blocks lesser than h, add h to the stack and 
            //increase the counter if h is not equal to the last block left in the stack
            if (h != stack[stack.length - 1]) {
                stack.push(h)
                count_block++
                last_block = h
            }
        }
    }
    return count_block

}
//STONE WALL OFFICIAL SOLUTION
// def stone_wall(H):
// 2 N = len(H)
// 3 stones = 0
// 4 stack = [0] * N
// 5 stack_num = 0
// 6
// 7 for i in range(N):
// 8 while stack_num > 0 and stack[stack_num - 1] > H[i]:
// 9 stack_num -= 1
// 10 if stack_num > 0 and stack[stack_num - 1] == H[i]:
// 11 pass
// 12 else:
// 13 stones += 1
// 14 stack[stack_num] = H[i]
// 15 stack_num += 1
// 16 return stones

//STONE WALL
function stonewall(H) {
    stack = [];
    countBlock = 0
    for (let i = 0; i < H.length; i++) {
        //remove the last block from our stack if the current block is lower
        //the previous ones have to end before current point. They have no
        //chance to exist in the remaining part. So the previous blocks are completely finished.
        console.log(stack[stack.length - 1])
        while (stack.length != 0 && H[i] < stack[stack.length - 1]) {

            console.log(`we are removing ${stack[stack.length - 1]}`)
            stack.pop();
            countBlock++ // count the blocks we have used to build
            //console.log('buildingblocks', countBlock)
        }

        //add a new block if if stack is empty or the new block is higher 
        //than the previous block Else (the height of current block is same as that
        // of previous one), they should be combined to one block.
        if (stack.length == 0 || H[i] > stack[stack.length - 1]) {
            console.log(`we just add block ${H[i]} to the stack`)
            stack.push(H[i])
        }


    }
    console.log(`counted building blocks ${countBlock}, the remaining stack blocks ${stack.length}`)
    countBlock += stack.length
    return countBlock

}
//let H = [8, 8, 5, 8]
//let H = [8, 5, 8, 7, 9, 8, 7, 7, 8]
//console.log(stonewall2(H))

//NESTING
function nesting(S) {
    //let A = Array(S).fill('') for this we dont need a stack, since it's either '(' or ')'
    top = 0
    if (S.length % 2 == 1) return 0
    for (s of S) {
        if (s == ')') {
            top--//decrement of top
            if (top < 0) return 0
            console.log('remaining top is: ', top, ', one set of bracket has been remove')
        } else {
            top++//increment of top
            //A[top] = s
            //console.log('new top', A)
        }
    }
    if (top == 0) {
        return 1
    } else {
        return 0
    }

}
//S = '(()(())())';
//console.log(nesting(S))

//FISH
function fish2(A, B) {
    let count = 0; //count fish eaten so far
    eater = [] //downstream fish that can eat others
    for (let i = 0; i < A.length; i++) {
        //if b is == 1 makes it a eater
        if (B[i] == 1) {
            eater.push(A[i])
            console.log(`We now have a eater ${eater}`)
        } else {
            //if the new fish is not a eater
            console.log(`the eater is now ${eater} and the fish is ${A[i]}`)
            while (eater.length != 0) {
                //untill you get to the end of the eater stack, 
                //if the last eater fish in the stack is greater than the new let it eat up the new 
                //by increasing the count of fish eating
                if (eater[eater.length - 1] > A[i]) {
                    count++
                    console.log(eater[eater.length - 1], 'has eaten', A[i])
                    console.log('noba fish eaten', count)
                    break;
                } else {
                    //if the last eater fish in the stack is less than the new, let the new
                    //eat up the last eater - itereate the condition untill the end of the stack (while loop)
                    console.log(A[i], 'has eaten', eater[eater.length - 1])
                    eater.pop();
                    count++
                    console.log('noba fish eaten', count)
                }
            }
        }

    }
    return A.length - count;
}
//not good enough - it didnt consider reverse motion of bigger fisher eaten smaller once
function fish(A, B) {

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (B[i] == 1 && B[i + 1] == 0 && A[i] > A[i + 1]) {
            console.log(A[i], 'has eaten', A[i + 1])
            A[i + 1] = A[i]
            A[i] = 0;
            B[i + 1] = 1

            console.log('now remains ', A, 'and', B)

        } else if (B[i] == 1 && B[i + 1] == 0 && A[i] < A[i + 1]) {
            console.log(A[i + 1], 'has eaten', A[i])

            console.log('now remains ', A)
        } else {
            count++
        }
    }
    return count;
}
//A = [4, 0, 0, 5, 1]
//let A = [4, 3, 2, 1, 5]
//let A = [0, 1]
//let B = [1, 1]
//let B = [0, 1, 0, 1, 0]
//console.log(fish2(A, B))


//BRACKET
//the idea here is set a counter and increment it for all the open brackets found -now decrement the
//counter as you find close bracket in the iteration
function bracket(S) {
    let A = Array(S).fill('') // A=[] will also work
    let top = 0;
    if (S.length % 2 == 1) return 0;
    //s in S will access the index of an array
    for (let s in S) {
        console.log('for bracket:', S[s], 'at', s)
        if ((S[s] == ')' && A[top - 1] == '(') || (S[s] == ']' && A[top - 1] == '[') || (S[s] == '}' && A[top - 1] == '{')) {
            top -= 1
            console.log('I just reduce top to ', top)
        } else {
            top += 1 //starting from 1??
            A[top - 1] = S[s]
            console.log('The top position is ', top)
        }
    }
    if (top == 0) {
        return 1
    } else {
        return 0
    }
}
//TRIANGLE
function triangle(A) {
    A.sort((a, b) => a - b)//to sort A = [10, 50, 5, 1] and not get [1, 10, 5, 50]
    console.log(A)
    for (i = 0; i < A.length; i++) {
        if ((A[i] + A[i + 1]) > A[i + 2]) return 1
    }

    return 0
}
//let A = [10, 50, 5, 1]
//console.log(triangle(A))
//MAX3PRODUCT
//explore the BookKeeping Solution too
function max3product(A) {
    A.sort()
    let len = A.length
    return Math.max((A[0] * A[1] * A[len - 1]), (A[len - 3] * A[len - 2] * A[len - 1]))
}
//let A = [1, 3, 1, 2, 1, 1, 2]
//A = [-5, -6, -4, -7, -10]
//console.log(max3product(A))
//DISTICT
function distinct(A) {
    A.sort()
    let distinct = 0
    for (i = 0; i < A.length; i++) {
        if (A[i] != A[i + 1]) {
            distinct++
        }
    }
    return distinct
}
//let A = [1, 3, 1, 2, 1, 1, 2]
//console.log(distinct(A))
//COUNT DIV
function countDiv(A, B, K,) {
    //this is totally wrong
    let sub = B - A
    return Math.ceil(sub / K)
}
//A = 6, B = 11, K = 2
//console.log(countDiv(A, B, K))

//let S = "{[()()]}"
//let S = "}})}"
//console.log(bracket(S));

//PASSING CARS
function passingCars() {
    let count = 0;
    let pair = 0;
    for (i of A) {
        if (i == 0) {
            count++
        } else {
            pair += count
        }
    }
    if (pair > 1000000000) return -1
    return pair;

}
//let A = [0, 1, 0, 1, 1]
//MISSING INTEGER
function missingInt(A) {
    let len = A.length
    let contain1 = 0
    //change all the unwanted numbers (-ve and > than len) to 1
    for (let i = 0; i < len; i++) {
        if (A[i] == 1) contain1 = 1
        if (A[i] < 1 || A[i] > A.length) A[i] = 1
    }
    //if contain1 is still 0 return 1 - means 1 is not found
    if (contain1 == 0) return 1
    //map the array with the index +1 to remove the ones available by changing them to -ve...changing them to zeros can not work because it will nollify the occurence of such number
    for (let i = 0; i < len; i++) {
        let j = Math.abs(A[i]) - 1
        console.log(j)
        //if (A[A[i] - 1] != 0) A[A[i] - 1] = 0
        if (A[j] > 0) A[j] = - A[j]
    }
    console.log(A)
    //check through the array the (index+1) of the first element > 0 is what we are searching for
    for (let i = 0; i < len; i++) {
        if (A[i] > 0) return i + 1
    }

    return len + 1
}
//A = [4, 1, 5, 6, 2]
//A = [1, 2, 3]
//A = [-1, -3]
//A = [7, -2, 3, 2, 1, 20, -5]
//console.log(missingInt(A))
//MAXCOUNTERS
//console.log(passingCars(A))
// (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     ** (2, 2, 2, 2, 2)
//         (3, 2, 2, 2, 2)(3, 0, 1, 2, 0)
//         (3, 2, 2, 3, 2)(3, 0, 1, 3, 0)
//         (3, 2, 2, 4, 2)(3, 0, 1, 4, 0)
function maxCounters(A, N) {
    let B = Array(N).fill(0)
    let max = 0
    for (i of A) {
        if (i != N + 1) {
            B[i - 1] += 1
            if (B[i - 1] < max) B[i - 1] += max
            console.log(B)
        } else {
            max = Math.max(...B) //this may not work find max as you go along
        }
    }
    for (i = 0; i < B.length; i++) {
        if (B[i] < max) B[i] = max
    }
    return B
}
//N = 5
//A = [3, 4, 4, 6, 1, 4, 4]
//console.log(maxCounters(A, N))

//PERM CHECK
// using array with includes is not a good solution - too much time complexity
function permCheck2(A) {
    // let set = [];
    // if (A.length == 0) return 1
    // for (i of A) {
    //     set.add(i)
    // }

    for (i = 0; i < A.length; i++) {
        if (!A.includes(i + 1)) return 0
    }
    return 1
}

function permCheck(A) {
    let set = new Set();
    if (A.length == 0) return 1
    for (i of A) {
        set.add(i)
    }

    for (i = 0; i < A.length; i++) {
        if (!set.has(i + 1)) return 0
    }
    return 1
}
//let A = [4, 1, 3, 2]
//console.log(permCheck2(A))


//PERM MISSING
function perm(A) {
    let set = new Set();
    if (A.length == 0) return 1
    for (i of A) {
        set.add(i)
    }

    for (i = 0; i < A.length; i++) {
        if (!set.has(i + 1)) return i + 1
    }
    return A.length + 1
}


//FROG RIVER ONE
//TRY TO ONLY ITERATE TO X THAT IS for(i=0; i<=X, i++)
// For example, given X = 5 and array A such that:

// A[0] = 1
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4
// the function should return 6, as explained above.

function frogRiver(A, X) {
    let location = new Set();
    let timer = 0

    for (i of A) {

        if (i <= X) {
            location.add(i);
            timer++

            //console.log('Leave falls to location:', i, '  timer:', timer)
            if (location.size == X) {
                return timer - 1;
            }
            //if (i == X) break;
        }

    }

    return -1;

}
//(3, [1, 3, 1, 3, 2, 1, 3]) //4
//let A = [1, 3, 1, 4, 2, 3, 5, 4];
//let A = [1, 3, 1, 3, 2, 1, 3];
//let X = 3;
//console.log(frogRiver(A, X))

//TAPE EQUILIBRIUM
function tapeEquil(A) {

    let left = 0
    let right = 0
    let minDiff, diff = 0

    if (A.length == 0 || A.length == 1) return 0
    for (let i = 1; i < A.length; i++) {
        right += A[i];
    }
    left = A[0]
    diff = Math.abs(left - right)
    minDiff = diff
    //total = A.reduce((a, b) => a + b);
    //console.log('total:', total);
    for (let i = 1; i < A.length - 1; i++) {
        left += A[i]
        right -= A[i]
        //console.log('left:', left);
        //console.log('right:', right);
        diff = Math.abs(left - right)
        if (minDiff > diff) {
            minDiff = diff
        }
        console.log('diff:', diff);

    }
    return minDiff;
}
//wnen i=N-2 you dont need to go to the last element again bcos it N-1 does not have any further element
//When i == 0, the head part is A[0], and the tail part is the remaining part A[1] ~ A[N-1]
//When i == N-2, the head part is A[0] ~ A[N-2], and the tail part is the last element A[N-1]

//let A = [3, 1, 2, 3, 4]
//console.log(tapeEquil(A))

//PERM MISSING ELEMENT
// A[0] = 2
// A[1] = 3
// A[2] = 1
// A[3] = 5
// 1235 or 1234
// the function should return 4,
//find the missing after sorting it
function permMissing(A) {
    //not the right solution
    //sort complexity is at least n*log(n)?
    // A.sort();
    // if (A.length == 0) return 1;
    // for (i = 0; i < A.length; i++) {
    //     if (A[i] != i + 1) {
    //         return i + 1
    //     }
    // }
    // return A.length + 1

    //USING XOR
    // var xor_sum = 0;
    // for (var i = 0; i < A.length; ++i) {
    //     console.log('before:', xor_sum)
    //     xor_sum = xor_sum ^ A[i] ^ (i + 1);
    //     console.log('after:', xor_sum)
    // }
    // console.log('final:', xor_sum)
    // return xor_sum ^ (A.length + 1);

    //USING SUMMATION
    let sumMissing = 0;
    let sum = 0
    for (i of A) {
        sumMissing += i
    }

    console.log(sumMissing)
    for (let i = 1; i <= A.length + 1; i++) {
        sum += i
    }
    //for an array for (i in A) will access the index - TEST THIS LATER
    // for (i in A) {
    //     sum = sum + (i + 1)
    //     console.log(sum)
    // }
    console.log('Total', sum)
    return sum - sumMissing;
}
//let A = [2, 3, 1, 4]
//console.log(perm(A))

//FROG JUMP

// the function should return 3, because the frog will be positioned as follows:

// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100

function frogJmp(X, Y, D) {
    //this is inefficient - it will timeout for large numbers
    // let count = 0;
    // while (X < Y) {
    //     X += D
    //     count++
    //    // console.log(X, 'count:', count)
    // }
    // return count;
    let distance = Y - X;
    let count = 0
    if (distance % D == 0) {

        count = distance / D
    } else {
        count = parseInt(distance / D + 1)

    }
    return count
}
// let X = 10
// let Y = 85
// let D = 30
//1 3 6
//console.log(frogJmp(X, Y, D))

//ODD OCCURRENCES IN ARRAY
//sort it and then compare the occurences
function oddOccurrence(A) {
    let B = A.sort()
    for (let i = 0; i <= A.length - 1; i += 2) {
        // 0, 3, 5, 

        if (B[i] != B[i + 1]) {
            return B[i]
        }
    }
    // return B[A.length - 1];
    //this is not a good solution it has time complexity of o(n*2)
    // let C = {}
    // for (i of A) {
    //     if (!C[i]) {
    //         C[i] = 1
    //     } else {
    //         C[i]++
    //     }
    // }
    // for (j in C) {
    //     if (C[j] === 1) {
    //         return parseInt(j)
    //     }
    // }

}
//let A = [9, 3, 9, 3, 9, 7, 9]
//console.log(oddOccurrence(A))


//CYCLIC ROTATION
//A = [3, 8, 9, 7, 6] 3 [9, 7, 6, 3, 8]


function cyclicRotation(A, K) {
    let len = A.length;
    if (len == 0) return A
    for (let i = 0; i <= K - 1; i++) {
        let pop = A.pop(A[len - 1]);
        A.unshift(pop);
    }
    return A;

}
//let A = []
//K = 1
//console.log(cyclicRotation(A, K))

//BINARY NUMBER
//10000010001  100000 10100
function binaryGap(N) {
    let A = N.toString(2);
    //console.log(A)
    let startPoint = A.indexOf(1);
    let endPoint = A.lastIndexOf(1);
    let count = 0;
    let maxCount = 0;

    if (startPoint == endPoint) return 0;

    for (let i = startPoint + 1; i <= endPoint; i++) {

        if (A[i] == 0) {
            count++

        } else {
            //console.log(count)
            if (maxCount < count) {
                maxCount = count;
            }
            count = 0;

        }
    }
    return maxCount;
}
//let N = 561892;
//console.log(binaryGap(N))

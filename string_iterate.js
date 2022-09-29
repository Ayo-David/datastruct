// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
//S = "dvdf"
S = "abcabcbb"
function longestSubStr(S) {
    let memo = new Set()
    let max = 0, count = 0
    for (let s of S) {
        if (!memo.has(s)) {
            memo.add(s)
            count++
            //max = count
        } else {
            if (count > max) max = count
            count = 0
            memo.clear()
            memo.add(s)
            count++

        }
        console.log(memo)
        console.log(`count is ${count} and max is ${max}`)
    }
    return max
}
//console.log(longestSubStr(S))



//let str = 'AABCDEEBBCAE';
//let str = 'AABBCAE';
str = 'ABCDEFGG'
//to map through a string
// for (let i of str) {
//     console.log(i)
// }
function firstRecurr(A) {
    let memo = new Set()
    for (let a of A) {
        if (memo.has(a)) return a
        memo.add(a)
        console.log(memo)
    }
    //use of map is not really neccessary, you can easily achieve this with set
    // let memo = new Map()
    // for (let a of A) {
    //     if (memo.has(a)) return a
    //     memo.set(a, 1)
    //     console.log(memo)
    // }
}

//console.log(firstRecurr(str))

function first_recurring(str) {
    count = {};
    //using for loop
    // for (let i = 0; i <= str.length; i++) {
    //     if (!count[str[i]]) {
    //         count[str[i]] = 1;
    //     } else {
    //         return str[i];
    //     }
    // }
    let n = 0;

    for (let i of str) {
        if (!count[i]) {//you can also use count.i but it can misbehave
            count[i] = 1; //you can also use count.i but it can misbehave
            console.log(count)
        } else {
            return i;
        }
        n++
    }
    return "none found";
}

function count_recurring(str) {
    memo = {};
    count = 0;
    for (let i of str) {
        //if it is inside increase the value else assign it
        if (memo[i]) {
            memo[i]++;
            // memo[i] = memo[i] + 1;
        } else {
            memo[i] = 1
        }
    }
    return memo;
    //console.log(memo)

}

//console.log(count_recurring(str));


//console.log(first_recurring(str));
splitStr = str.split('');
str2 = str.substring(1, 4);//it keeps a new copy of the array and return the splice
str4 = str.splice(1, 4);//it keeps a new copy of the array and return the splice
str3 = splitStr.pop(); //it removes the last and return a reduced array - compare str3 and splitStr
console.log(str3);
console.log(splitStr);
console.log(str4);

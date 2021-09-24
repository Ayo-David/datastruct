
//let str = 'AABCDEEBBCAE';
let str = 'AABBCAE';
//to map through a string
// for (let i of str) {
//     console.log(i)
// }

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


console.log(first_recurring(str));
splitStr = str.split('');
str2 = str.substring(1, 4);//it keeps a new copy of the array and return the splice
str4 = str.slice(1, 4);//it keeps a new copy of the array and return the splice
str3 = splitStr.pop(); //it removes the last and return a reduced array - compare str3 and splitStr
//console.log(str2);
//console.log(splitStr);
//console.log(str);

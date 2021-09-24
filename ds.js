
let str = 'ABBCAE';
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

    for (let i of str) {
        if (!count[i]) {//you can also use count.i
            count[i] = 1; //you can also use count.i
        } else {
            return i;
        }
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

console.log(count_recurring(str));


//console.log(first_recurring(str));

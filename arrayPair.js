

function unpair(myArray) {


    let memo = {};
    for (i of myArray) {
        if (memo[i]) {
            memo[i]++;
            //console.log(memo[i]);
        } else {
            memo[i] = 1;

        }
    }
    for (j in memo) {
        if (memo[j] == 1) {
            return j;
        }
    }
}
console.log(unpair([9, 3, 9, 3, 9, 7, 9]));
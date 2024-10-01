

function binaryGap(number) {


    let binary = number.toString(2);
    //get starting point
    let startfrom = binary.indexOf(1);
    //get end point
    let endpoint = binary.lastIndexOf(1);
    console.log(`For ${binary}: Start at ${startfrom} | end at ${endpoint}`);
    if (endpoint != 0) {

        let memo = []; let count = 0;
        //search through thhe binary


        // for (i of binary) {//dont use for of if you need the index
        //     if (i == 0) {
        //         count++
        //     }else{
        //         memo[ii-1]
        //     }
        // }
        let maxCount = 0 //use this to get maxcount without using memo
        for (let i = startfrom; i <= endpoint; i++) {
            if (binary[i] == 0) {
                count++
                //if the next number is 1, then store count into the memo
                if (binary[i + 1] == 1) {
                    //memo[i] = count; //this is for using object as memo
                    memo.push(count);
                    if (count > maxCount) {
                        maxCount = count;
                    }

                    count = 0;
                }
            }
        }
        //highest = Math.max(...memo);
        let highest = 1;
        //this works for object as memo
        // for (i in memo) {
        //     if (memo[i] > highest) {
        //         highest = memo[i];
        //     }
        // }
        for (i of memo) {
            if (i > highest) {
                highest = i;
            }
        }

        console.log('counts of zeros are: ', memo)
        //return highest;
        return maxCount;
    } else {
        return 0
    }

}

function binarygap(s) {
    let b = s.toString(2)
    console.log(`b = `, b)
    let first = b.indexOf(0)
    let last = b.lastIndexOf(1)
    let max = 0
    let count = 0

    if (last == 0) return 0

    for (let i = first; i <= last; i++) {
        if (b[i] == 0) {
            console.log(`b[i] = `, b[i])
            count++
        } else {
            console.log(`b[i] = `, b[i])
            console.log(`count = `, count)
            if (count > max) max = count
            count = 0
        }
    }

    return max
}

console.log('The highest count of zeros:', binarygap(647));


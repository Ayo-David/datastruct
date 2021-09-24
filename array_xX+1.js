//count element x if x+1 is in the array
function countElement(arr) {
    count = 0;
    for (let n of arr) {
        m = n + 1;
        if (arr.includes(m)) {
            count++
        }
    }
    return count;
}
//52CD+
function calPoints(ops) {
    console.log(ops);
    newArray = [];
    let m, y, c;
    for (let i of ops) {
        switch (i) {
            case 'C':
                newArray.pop();
                console.log(newArray);
                break;
            case 'D':
                m = newArray[(newArray.length) - 1] * 2;
                newArray.push(m);
                console.log(newArray);
                break;
            case '+':
                y = newArray[newArray.length - 1] + newArray[newArray.length - 2];
                newArray.push(y);
                console.log(newArray);
                break;
            default:
                newArray.push(parseInt(i));
                console.log(newArray);
                break;
        }

    }
    c = newArray.reduce((a, b) => { return a + b });
    return c;

}
console.log(calPoints('52CD+'));
//console.log(countElement([1, 3, 2, 3, 5, 0]));

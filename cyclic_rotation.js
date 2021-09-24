function rotate(myArray, K) {
    for (let i = 1; i <= K; i++) {
        var toMove = myArray.pop();
        myArray.unshift(toMove)
    }
    console.log('The new array:', myArray);
    return myArray;

}

console.log(rotate([-1, 2, 3, -4], 3));



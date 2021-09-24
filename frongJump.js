function frogJump(X, Y, D) {
    let n = 0;
    //while runs like for loop, but if runs once if the condition is satisfy
    while (X <= Y) {
        X = X + D;
        n++
    }
    return n;
}

console.log(frogJump(10, 105, 30))
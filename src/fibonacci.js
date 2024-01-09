// Non-recursive Fibonacci solution.
function fibs(n) {
    const arr = [];
    let x = 0;
    let y = 1;
    let z = x + y;
    arr.push(x, y, z);
    for (let i = 3; i < n; i++) {
        x = y;
        y = z;
        z = x + y;
        arr.push(z);
    }
    return arr;
}

// Recursive Fibonacci solution.
function fibsRec(n) {
    /* i more or less found a solution but i don't really understand.
    so im gonna come back after doing merge sort */
}

export { fibs, fibsRec };
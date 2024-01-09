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
    
}

function test(n, arr) {
    if (n === 1) {
        arr.push(n);
        return n;
    }
    const x = n + test(n - 1, arr);
    arr.push(x);
    if (arr.length === 5) {
        return arr;
    }
    return x;
}

export { fibs, fibsRec, test };
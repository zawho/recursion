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
    if (n === 2) {
        return [0, 1];
    }
    const arr = fibsRec(n - 1);
    const last = arr.length;
    arr.push(arr[last - 1] + arr[last - 2]);
    return arr;
}

export { fibs, fibsRec };
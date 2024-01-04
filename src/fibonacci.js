// Non-recursive fibonacci solution.
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

export default fibs;
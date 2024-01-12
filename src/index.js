/* eslint-disable no-console */
import { fibs, fibsRec } from './fibonacci';
import mergeSort from './merge-sort';

console.log(`Non-recursive Fibonacci: [${fibs(8)}]`);
console.log(`Recursive Fibonacci: [${fibsRec(8)}]`);
console.log(`Merge sort: [${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}]`);
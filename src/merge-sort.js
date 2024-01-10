/* eslint-disable no-plusplus */
function merge(arr1, arr2) {
    const arr3 = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < (arr1.length) && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3[k] = arr1[i];
            i++;
        } else {
            arr3[k] = arr2[j];
            j++;
        }
        k++;
    }
    while (i < arr1.length) {
        arr3[k] = arr1[i];
        i++;
        k++;
    }
    while (j < arr2.length) {
        arr3[k] = arr2[j];
        j++;
        k++;
    }
    return arr3;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const split = arr.length / 2;
    const left = arr.slice(0, (split));
    const right = arr.slice(split);
    mergeSort(left);
    mergeSort(right);
    return merge(left, right);
}

export default mergeSort;
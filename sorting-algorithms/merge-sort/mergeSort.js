/**
 * Merges two sorted arrays into a single sorted array.
 *
 * @param {Array} leftArr - The left array to be merged.
 * @param {Array} rightArr - The right array to be merged.
 * @returns {Array} - The sorted array after merging.
 */
function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

/**
 * Sorts an array using the merge sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Command line testing of insertionSort() using Node.js

// Parsing the command line argument as an array
let a = process.argv[2].slice(1, -1).split(',').map(Number);

// Sorting the array using the insertionSort() function
console.log(mergeSort(a));
/**
 * Sorts an array using the quicksort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
    let pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Code to test the function:
console.log(quickSort([5, 3, 7, 6, 2, 9])); // [2, 3, 5, 6, 7, 9]
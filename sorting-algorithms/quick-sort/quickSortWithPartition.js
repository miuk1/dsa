/**
 * Sorts an array using the Quick Sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @param {number} [low=0] - The starting index of the array or subarray to be sorted.
 * @param {number} [high=arr.length - 1] - The ending index of the array or subarray to be sorted.
 * @returns {Array} - The sorted array.
 */
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}

/**
 * Partitions an array based on a pivot element.
 * @param {Array} arr - The array to be partitioned.
 * @param {number} low - The starting index of the partition.
 * @param {number} high - The ending index of the partition.
 * @returns {number} - The index of the pivot element after partitioning.
 */
function partition(arr, low, high) {
    const pivot = arr[Math.floor((low + high) / 2)];
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j) {
            return j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}


// Code to test the function:
console.log(quickSort([5, 3, 7, 6, 2, 9])); // [2, 3, 5, 6, 7, 9]
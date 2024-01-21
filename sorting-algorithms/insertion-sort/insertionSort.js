/**
 * Sorts an array using the insertion sort algorithm.
 * 
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

// Command line testing of insertionSort() using Node.js

// Parsing the command line argument as an array
let a = process.argv[2].slice(1, -1).split(',').map(Number);

// Sorting the array using the insertionSort() function
console.log(insertionSort(a));
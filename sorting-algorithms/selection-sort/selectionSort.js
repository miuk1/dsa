
/**
 * Sorts an array using the selection sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

// Command line testing of selectionSort() using Node.js

// Parsing the command line argument as an array
let a = process.argv[2].slice(1, -1).split(',').map(Number);

// Sorting the array using the selectionSort() function
console.log(selectionSort(a));
/**
 * Sorts an array using the bubble sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(arr) {
    let isSwapped;
    do {
        isSwapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSwapped = true;
            }
        }
    } while (isSwapped);

    return arr;
}

// Command line testing of bubbleSort() using Node.js

// Parsing the command line argument as an array
let a = process.argv[2].slice(1, -1).split(',').map(Number);

// Sorting the array using the bubbleSort() function
console.log(bubbleSort(a));
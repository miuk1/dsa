/**
 * Performs a recursive binary search on a sorted array.
 * @param {Array} arr - The sorted array to search.
 * @param {*} ele - The element to search for.
 * @returns {number} - The index of the element in the array, or -1 if not found.
 */
function recursiveBinarySearch(arr, ele) {
    return search(arr, ele, 0, arr.length - 1);
}

/**
 * Performs a binary search on a sorted array to find the index of a given element.
 * @param {Array} arr - The sorted array to search in.
 * @param {*} ele - The element to search for.
 * @param {number} leftIndex - The leftmost index of the search range.
 * @param {number} rightIndex - The rightmost index of the search range.
 * @returns {number} - The index of the element if found, otherwise -1.
 */
function search(arr, ele, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1;
    }

    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (ele === arr[midIndex]) {
        return midIndex;
    }

    if (ele < arr[midIndex]) {
        return search(arr, ele, leftIndex, midIndex - 1);
    } else {
        return search(arr, ele, midIndex + 1, rightIndex);
    }
}


let a = process.argv[2].slice(1, -1).split(',').map(Number);
let b = Number(process.argv[3])
console.log(recursiveBinarySearch(a, b))
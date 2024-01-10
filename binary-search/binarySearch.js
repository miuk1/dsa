/**
 * Performs binary search on a sorted array to find the index of a given element.
 * @param {Array} array - The sorted array to search in.
 * @param {*} ele - The element to search for.
 * @returns {number} - The index of the element in the array, or -1 if not found.
 */
function binarySearch(array, ele) {
    const sortedArray = array.sort(function (a, b) { return a - b });
    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (sortedArray[mid] === ele) {
            return mid;
        } else if (ele < sortedArray[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1
}


let a = process.argv[2].slice(1, -1).split(',').map(Number);
let b = Number(process.argv[3])
console.log(binarySearch(a, b))
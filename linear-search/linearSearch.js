/**
 * Performs a linear search on the given array to find the index(es) of the specified element.
 * @param {Array} array - The array to be searched.
 * @param {*} element - The element to be searched for.
 * @returns {number|Array} - The index of the element if found, or an array of indices if multiple instances are found, or -1 if not found.
 */
function linearSearch(array, element) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        return -1;
    } else if (result.length === 1) {
        return result[0];
    } else {
        return result;
    }
}


let a = process.argv[2].slice(1, -1).split(',').map(Number);
let b = parseInt(process.argv[3]);

console.log(linearSearch(a, b));

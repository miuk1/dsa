function cartesianProduct(arr1, arr2) {
    let product = [];

    for (let num1 of arr1) {
        for (let num2 of arr2) {
            product.push([num1, num2]);
        }
    }

    return product;
}


// Alternate solution
function cartesianProduct2(arr1, arr2) {
    return arr1.reduce((acc, curr) => {
        return acc.concat(arr2.map(num => [curr, num]));
    }, []);
}

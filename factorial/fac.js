let a = Number(process.argv[2]);

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

console.log(factorial(a));
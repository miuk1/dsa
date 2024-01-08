//Problem : Determine given a positive integer "n", determine if the number is a power of two or not.

function isPowerOfTwo(num) {
    if (num === 1) {
        return true;
    }
    else if (num % 2 === 0) {
        return isPowerOfTwo(num / 2);
    } else {
        return false;
    }
}

function isPowerOfTwoBit(num) {
    if (num === 1) {
        return true;
    }
    return (num & (num - 1)) === 0;
}

let num = Number(process.argv[2]);
console.log(isPowerOfTwo(num));
console.log(isPowerOfTwoBit(num));
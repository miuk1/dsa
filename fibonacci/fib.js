//print out the fibonacci series up to the argument
//fib(5) = 0, 1, 1, 2, 3

var x = process.argv[2];

function fib(x) {
    let a = 0;
    let b = 1;

    while (a <= x) {
        console.log(a);
        let c = a + b;
        a = b;
        b = c;
    }
}

console.log(fib(x));


//alternate solution

// function fib(x) {
//     let fibArray = [0, 1];
//     for (let i = 2; i <= x; i++) {
//         fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
//     }
//     return fibArray;
// }

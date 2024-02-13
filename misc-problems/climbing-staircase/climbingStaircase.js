// Given a number of stairs, you can climb 1 or 2 steps at a time. Write a function that returns the number of unique ways you can climb the stairs. For example, if the input is 4, the function should return 5, as there are 5 unique ways to climb the stairs: 1) 1, 1, 1, 1 2) 1, 1, 2 3) 1, 2, 1 4) 2, 1, 1 5) 2, 2

function climbingStaircase(n) {
    const numOfSteps = [1, 2];
    for (let i = 2; i <= n; i++) {
        numOfSteps[i] = numOfSteps[i - 1] + numOfSteps[i - 2];
    }
    return numOfSteps[n - 1];
}


console.log(climbingStaircase(4)); // 5
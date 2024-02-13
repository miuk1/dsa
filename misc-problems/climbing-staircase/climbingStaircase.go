package main

import (
	"fmt"
)

func climbingStaircase(n int) int {
	numOfSteps := make([]int, n+1)
	numOfSteps[0] = 1
	if n > 1 {
		numOfSteps[1] = 2
	}

	for i := 2; i <= n; i++ {
		numOfSteps[i] = numOfSteps[i-1] + numOfSteps[i-2]
	}

	return numOfSteps[n-1]
}

func main() {
	fmt.Println("Number of steps to climb 4 steps: ", climbingStaircase(4), " Expected: 5")
}

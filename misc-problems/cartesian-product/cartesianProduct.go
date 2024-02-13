package main

import (
	"fmt"
)

func cartesianProduct(a []int, b []int) [][]int {
	var result [][]int
	for _, x := range a {
		for _, y := range b {
			result = append(result, []int{x, y})
		}
	}
	return result
}

func main() {
	fmt.Println(cartesianProduct([]int{1, 2, 3}, []int{4, 5, 6}))
}

// Output:
// [[1 4] [1 5] [1 6] [2 4] [2 5] [2 6] [3 4] [3 5] [3 6]]

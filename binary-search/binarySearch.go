package main

import (
	"fmt"
	"sort"
)

func binarySearch(arr []int, target int) int {
	low := 0
	high := len(arr) - 1

	for low <= high {
		mid := (low + high) / 2

		if arr[mid] == target {
			return mid
		} else if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return -1
}

func main() {
	// Test the binarySearch function
	arr := []int{2, 4, 6, 8, 10}
	sort.Ints(arr) // Sort the array
	target := 6
	index := binarySearch(arr, target)
	fmt.Println("Target found at index:", index)
}

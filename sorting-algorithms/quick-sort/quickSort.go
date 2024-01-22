package main

import (
	"fmt"
)

// quickSort is a function that takes an array of integers and returns the sorted array.
func quickSort(arr []int) []int {
	return quickSortHelper(arr, 0, len(arr)-1)
}

// quickSortHelper is a recursive function that performs the quicksort algorithm on a given array.
// It takes an array, start index, and end index as parameters and returns the sorted array.
func quickSortHelper(arr []int, start, end int) []int {
	if start >= end {
		return arr
	}

	pivot := start
	left := start + 1
	right := end

	for right >= left {
		if arr[left] > arr[pivot] && arr[right] < arr[pivot] {
			arr[left], arr[right] = arr[right], arr[left]
		}

		if arr[left] <= arr[pivot] {
			left += 1
		}

		if arr[right] >= arr[pivot] {
			right -= 1
		}
	}

	arr[pivot], arr[right] = arr[right], arr[pivot]

	leftSubarrayIsSmaller := right-1-start < end-(right+1)

	if leftSubarrayIsSmaller {
		quickSortHelper(arr, start, right-1)
		quickSortHelper(arr, right+1, end)
	} else {
		quickSortHelper(arr, right+1, end)
		quickSortHelper(arr, start, right-1)
	}

	return arr
}

// Entry point for the program and to test the above function
func main() {
	arr := []int{8, 5, 2, 9, 5, 6, 3}
	fmt.Println("Unsorted Array: ", arr)
	fmt.Println("Sorted Array: ", quickSort(arr))
}

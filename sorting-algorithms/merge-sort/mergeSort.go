package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := arr[:mid]
	right := arr[mid:]

	return merge(mergeSort(left), mergeSort(right))
}

func merge(left, right []int) []int {
	result := make([]int, 0)

	for len(left) > 0 && len(right) > 0 {
		if left[0] < right[0] {
			result = append(result, left[0])
			left = left[1:]
		} else {
			result = append(result, right[0])
			right = right[1:]
		}
	}

	result = append(result, left...)
	result = append(result, right...)

	return result
}

// main is the entry point of the program.
// It takes a list of integers as command-line arguments,
// sorts the list using the insertion sort algorithm,
// and prints the original and sorted lists.
func main() {
	// Check if command-line arguments are provided
	if len(os.Args) < 2 {
		fmt.Println("Please provide a list of integers as command-line arguments.")
		os.Exit(1)
	}

	// Get the command line argument
	arg := os.Args[1]

	// Remove square brackets from the argument
	input := strings.Trim(arg, "[]")

	// Remove commas from the argument
	input = strings.Replace(input, ",", " ", -1)

	// Split the argument into individual items
	items := strings.Fields(input)

	// Parse the items as integers
	arr := make([]int, len(items))

	for i, item := range items {
		num, err := strconv.Atoi(item)
		if err != nil {
			fmt.Println("Error parsing command line arguments: ", err)
			os.Exit(1)
		}
		arr[i] = num
	}

	// Print the original list
	fmt.Println("Original list: ", arr)

	// Sort the list using the insertionSort function
	sortedList := mergeSort(arr)

	// Print the sorted list
	fmt.Println("Sorted list: ", sortedList)
}

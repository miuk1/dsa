package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

// selectionSort sorts the given slice of integers in ascending order using the selection sort algorithm.
func selectionSort(arr []int) []int {
	n := len(arr)

	for i := 0; i < n-1; i++ {
		minIndex := i

		for j := i + 1; j < n; j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
		}

		arr[i], arr[minIndex] = arr[minIndex], arr[i]
	}

	return arr
}

// main is the entry point of the program.
// It takes a list of integers as command-line arguments,
// sorts the list using the selection sort algorithm,
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
	fmt.Println("Original list:", arr)

	// Sort the list
	sortedArr := selectionSort(arr)

	// Print the sorted list
	fmt.Println("Sorted list:", sortedArr)
}

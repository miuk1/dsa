package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

// insertionSort sorts the given slice of integers in ascending order using the insertion sort algorithm.
func insertionSort(items []int) []int {
	for i := range items {
		temp := items[i]
		j := i - 1

		for j >= 0 && items[j] > temp {
			items[j+1] = items[j]
			j = j - 1
		}
		items[j+1] = temp
	}
	return items
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
	sortedList := insertionSort(arr)

	// Print the sorted list
	fmt.Println("Sorted list: ", sortedList)
}

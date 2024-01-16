package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func bubbleSort(items []int) {
	n := len(items)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if items[j] > items[j+1] {
				// swap
				items[j], items[j+1] = items[j+1], items[j]
			}
		}
	}
}

func main() {
	// Check if at least one command-line argument is provided
	if len(os.Args) < 2 {
		fmt.Println("Please provide a list of integers as command-line arguments.")
		os.Exit(1)
	}

	// Get the command line argument
	arg := os.Args[1]

	// Remove brackets and trim spaces from the input string
	input := strings.Trim(arg, "[]")

	// Split the input string by spaces
	items := strings.Fields(input)

	// Parse the items as integers
	arr := make([]int, 0, len(items))
	for _, item := range items {
		num, err := strconv.Atoi(item)
		if err != nil {
			fmt.Println("Error parsing command line arguments:", err)
			os.Exit(1)
		}
		arr = append(arr, num)
	}

	// Use the value from the command line
	fmt.Println("Original list:", arr)

	// Sort the list using the bubbleSort function
	bubbleSort(arr)

	// Display the sorted list
	fmt.Println("Sorted list:", arr)
}

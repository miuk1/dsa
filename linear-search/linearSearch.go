package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func linearSearch(arr []int, target int) interface{} {
	indices := []int{}
	for i := 0; i < len(arr); i++ {
		if arr[i] == target {
			indices = append(indices, i)
		}
	}
	if len(indices) == 0 {
		return -1
	} else {
		return indices
	}
}

func main() {
	args := os.Args[1:]
	arrStr := strings.Trim(args[0], "[]")
	arr := []int{}
	for _, numStr := range strings.Split(arrStr, ",") {
		num, _ := strconv.Atoi(numStr)
		arr = append(arr, num)
	}
	target, _ := strconv.Atoi(args[1])
	fmt.Println(linearSearch(arr, target))
}

package main

import "fmt"

func isPowerOfTwo(n int) bool {
	if n <= 0 {
		return false
	} else if n == 1 {
		return true
	}
	for n%2 == 0 {
		n /= 2
	}
	return n == 1
}

func isPowerOfTwoBit(n int) bool {
	if n <= 0 {
		return false
	}
	return n&(n-1) == 0
}

func main() {
	fmt.Println(isPowerOfTwo(1))
	fmt.Println(isPowerOfTwo(16))
	fmt.Println(isPowerOfTwo(218))
	fmt.Println(isPowerOfTwoBit(1))
	fmt.Println(isPowerOfTwoBit(16))
	fmt.Println(isPowerOfTwoBit(218))
}

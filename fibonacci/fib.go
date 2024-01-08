// print fibonacci series upto n terms
package main

import "fmt"

func main() {
	var n int
	fmt.Println("Enter the number of terms:")
	fmt.Scan(&n)
	fmt.Println("The fibonacci series upto", n, "terms is:")
	fib(n)
}

func fib(n int) {
	a := 0
	b := 1
	for i := 0; i < n; i++ {
		fmt.Println(a)
		c := a + b
		a = b
		b = c
	}
}

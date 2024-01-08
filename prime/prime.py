import sys

isPrime = lambda n: n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))

if __name__ == "__main__":
    x = int(sys.argv[1])
    print(isPrime(x))

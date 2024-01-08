import sys

def isPowerOfTwo(n: int) -> bool :
    if n == 1: return True
    # use bitwise operator
    return n > 0 and n & (n - 1) == 0

if __name__ == "__main__":
    x = int(sys.argv[1])
    print(isPowerOfTwo(x))
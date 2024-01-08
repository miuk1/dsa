import sys
def fac(x):
    if x == 0:
        return 1
    else:
        return x * fac(x-1)
    

if __name__ == '__main__':
    x = int(sys.argv[1])
    print(fac(x))

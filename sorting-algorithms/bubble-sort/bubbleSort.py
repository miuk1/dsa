import sys

def bubbleSort(arr):
    """
    Sorts the given array using the bubble sort algorithm.

    Parameters:
    arr (list): The array to be sorted.

    Returns:
    list: The sorted array.
    """
    n = len(arr)
    sorted = False
    while not sorted:
        sorted = True
        for i in range(n-1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                sorted = False
    return arr


if __name__ == "__main__":
    arr = list(map(int, sys.argv[1].strip('[]').split(',')))
    print(bubbleSort(arr))
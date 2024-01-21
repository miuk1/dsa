import sys


def insertionSort(arr):
    """
    Sorts the given array using the insertion sort algorithm.

    Parameters:
    arr (list): The array to be sorted.

    Returns:
    list: The sorted array.
    """
    for i in range(1, len(arr)):
        temp = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > temp:
            arr[j+1] = arr[j]
            j = j-1
        arr[j+1] = temp
    return arr


if __name__ == "__main__":
    a = list(map(int, sys.argv[1].strip("[]").split(",") ))
    print(insertionSort(a))
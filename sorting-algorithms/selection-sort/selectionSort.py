import sys


def selection_sort(arr):
    """
    Sorts the given array using the selection sort algorithm.

    Parameters:
    arr (list): The array to be sorted.

    Returns:
    list: The sorted array.
    """
    for i in range(len(arr)):
        min_index = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

if __name__ == "__main__":
    a = list(map(int, sys.argv[1].strip("[]").split(",") ))
    print(selection_sort(a))

# Example usage:
# $ python selectionSort.py [5, 2, 3, 1, 4]
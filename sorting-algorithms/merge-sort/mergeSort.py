import sys


def merge_sort(arr):
    """
    Sorts the given array using the merge sort algorithm.

    Parameters:
    arr (list): The array to be sorted.

    Returns:
    list: The sorted array.
    """
    if len(arr) < 2:
        return arr
    
    mid = len(arr) // 2
    left_arr = arr[:mid]
    right_arr = arr[mid:]

    return merge(merge_sort(left_arr), merge_sort(right_arr))

def merge(left_arr, right_arr):
    """
    Merge two sorted arrays into a single sorted array.

    Args:
        left_arr (list): The left sorted array.
        right_arr (list): The right sorted array.

    Returns:
        list: The merged sorted array.
    """
    sorted_arr = []

    while left_arr and right_arr:
        if left_arr[0] < right_arr[0]:
            sorted_arr.append(left_arr.pop(0))
        else:
            sorted_arr.append(right_arr.pop(0))

    sorted_arr += left_arr
    sorted_arr += right_arr

    return sorted_arr

if __name__ == "__main__":
    a = list(map(int, sys.argv[1].strip("[]").split(",") ))
    print(merge_sort(a))

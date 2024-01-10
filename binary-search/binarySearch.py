import sys

def binary_search(arr, ele):
    """
    Perform binary search on a sorted array to find the index of an element.

    Parameters:
    arr (list): The sorted array to search in.
    ele: The element to search for.

    Returns:
    int: The index of the element in the array, or -1 if the element is not found.
    """
    sorted_arr = sorted(arr)
    low = 0
    high = len(sorted_arr) - 1


    while low <= high:
        mid = (low + high) // 2
        if sorted_arr[mid] == ele:
            return mid
        elif sorted_arr[mid] < ele:
            low = mid + 1
        else:
            high = mid - 1

    return -1
    

if __name__ == "__main__":
    # Assuming the command line arguments are provided as integers
    arr = list(map(int, sys.argv[1].strip('[]').split(',')))
    ele = int(sys.argv[2])

    result = binary_search(arr, ele)
    print(f"The index of {ele} in the array is: {result}")

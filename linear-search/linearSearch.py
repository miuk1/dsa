import sys

def linear_search(arr, target):
    """
    Perform linear search on the given array to find the target element.

    Args:
        arr (list): The array to be searched.
        target: The element to be searched for.

    Returns:
        int or list: If the target element is found, returns a list of indices where the element is found.
                    If the target element is not found, returns -1.
    """
    indices = []
    for i in range(len(arr)):
        if arr[i] == target:
            indices.append(i)
    if len(indices) == 0:
        return -1
    else:
        return indices

if __name__ == "__main__":
    arr = list(map(int, sys.argv[1].strip('[]').split(',')))
    target = int(sys.argv[2])
    print(linear_search(arr, target))



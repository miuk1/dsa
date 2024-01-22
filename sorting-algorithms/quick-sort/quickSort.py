def quickSort(arr):
    """
    Sorts a list using the Quick Sort algorithm.

    Parameters:
    arr (list): The list to be sorted.

    Returns:
    list: The sorted list.
    """
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr.pop()
        less = []
        greater = []
        for item in arr:
            if item < pivot:
                less.append(item)
            else:
                greater.append(item)
        return quickSort(less) + [pivot] + quickSort(greater)
    

def quickSortWithPartition(arr, low, high):
    """
    Sorts the given array using the Quick Sort algorithm with partition.

    Parameters:
    arr (list): The array to be sorted.
    low (int): The starting index of the array.
    high (int): The ending index of the array.

    Returns:
    list: The sorted array.
    """
    if low < high:
        partitionIndex = partition(arr, low, high)
        quickSortWithPartition(arr, low, partitionIndex - 1)
        quickSortWithPartition(arr, partitionIndex + 1, high)
    return arr

def partition(arr, low, high):
    """
    Partition the array around a pivot element.

    Args:
        arr (list): The array to be partitioned.
        low (int): The starting index of the partition.
        high (int): The ending index of the partition.

    Returns:
        int: The index of the pivot element after partitioning.
    """
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1


# Code to run the algorithm
arr = [10, 7, 8, 9, 1, 5]
n = len(arr)
print("Unsorted array: ", arr)
print("Sorted with partition: ", quickSortWithPartition(arr, 0, n-1))
print("Sorted: ",quickSort(arr))

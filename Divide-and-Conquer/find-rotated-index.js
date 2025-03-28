function findRotatedIndex(arr, num) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

    // If the element at mid is the target, return its index
        if (arr[mid] === num) {
        return mid;
        }

        // Determine which part of the array is sorted
        if (arr[low] <= arr[mid]) {
        // Left side is sorted
        if (num >= arr[low] && num < arr[mid]) {
            // If the number is in the sorted part
            high = mid - 1;
        } else {
            // Else move to the right part
            low = mid + 1;
        }
        } else {
        // Right side is sorted
        if (num > arr[mid] && num <= arr[high]) {
            // If the number is in the sorted part
            low = mid + 1;
        } else {
            // Else move to the left part
            high = mid - 1;
      }
    }
  }

  // If not found, return -1
  return -1;
}

module.exports = findRotatedIndex
function findRotationCount(arr) {
    let low = 0;
    let high = arr.length - 1;
  
    // If the array is already sorted and not rotated
    if (arr[low] <= arr[high]) return 0;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
  
      // Check if mid is the point of rotation (smallest element)
      if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
      }
  
      // Check if mid-1 is the point of rotation
      if (arr[mid - 1] > arr[mid]) {
        return mid;
      }
  
      // If the left half is sorted, pivot is in the right half
      if (arr[low] <= arr[mid]) {
        low = mid + 1;
      } else {
        // Pivot is in the left half
        high = mid - 1;
      }
    }
  
    return 0; // In case no rotation was found, which shouldn't happen with valid input
}


module.exports = findRotationCount
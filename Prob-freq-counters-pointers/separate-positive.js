// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    // Loop until the two pointers meet or cross each other
    while (left < right) {
      // If the current element at left is positive, move left pointer to the right
      if (arr[left] > 0) {
        left++;
      }
      // If the current element at right is negative, move right pointer to the left
      else if (arr[right] < 0) {
        right--;
      }
      // If left points to a negative number and right points to a positive number, swap them
      else {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
  
    return arr;
  }
  

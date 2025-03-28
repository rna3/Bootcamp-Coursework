// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // Calculate the current average of the pair
      const currentAvg = (arr[left] + arr[right]) / 2;
  
      // Check if the current average is equal to the target
      if (currentAvg === target) {
        return true;
      } 
      // If the current average is less than the target, move the left pointer to the right
      else if (currentAvg < target) {
        left++;
      } 
      // If the current average is greater than the target, move the right pointer to the left
      else {
        right--;
      }
    }
  
    return false; // No pair found that matches the target average
  }
  

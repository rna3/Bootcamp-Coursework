function countZeroes(arr) {
  let left = 0;
  let right = arr.length -1;


  function findFirstZero(arr, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
            return mid;
        }
        else if (arr[mid] === 1) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }
    return -1;
  }
  const firstZeroIndex = findFirstZero(arr, left, right);

    if (firstZeroIndex === -1) return 0;

    return arr.length - firstZeroIndex;  
}

module.exports = countZeroes
// add whatever parameters you deem necessary
function countPairs(arr, target) {
    let seen = new Set();
    let pairCount = 0;
  
    for (let num of arr) {
      let complement = target - num;
      if (seen.has(complement)) {
        pairCount++;
      }
      seen.add(num);
    }
  
    return pairCount;
  }
  
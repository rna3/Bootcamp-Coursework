// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // Convert both numbers to strings
    const str1 = num1.toString();
    const str2 = num2.toString();
  
    // If the numbers have different lengths, they can't have the same frequency of digits
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create a frequency map for num1
    let freq1 = {};
    for (let digit of str1) {
      freq1[digit] = (freq1[digit] || 0) + 1;
    }
  
    // Create a frequency map for num2 and compare with freq1
    let freq2 = {};
    for (let digit of str2) {
      freq2[digit] = (freq2[digit] || 0) + 1;
    }
  
    // Compare both frequency maps
    for (let key in freq1) {
      if (freq1[key] !== freq2[key]) {
        return false; // If the counts don't match, return false
      }
    }
  
    return true; // If all counts match, return true
  }
  

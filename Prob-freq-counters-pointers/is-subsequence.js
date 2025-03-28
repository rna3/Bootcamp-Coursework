// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0;  // Pointer for str1
    let j = 0;  // Pointer for str2
  
    // Iterate over str2
    while (j < str2.length) {
      // If characters match, move pointer i for str1
      if (str1[i] === str2[j]) {
        i++;
      }
      
      // If we've matched all characters of str1, return true
      if (i === str1.length) {
        return true;
      }
      
      // Move pointer j for str2
      j++;
    }
  
    // If we reach the end of str2 and haven't matched all of str1, return false
    return false;
  }
  

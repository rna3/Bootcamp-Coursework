// add whatever parameters you deem necessary
function constructNote(message, letters) {
    // Create a frequency map for the letters
    let letterCount = {};
  
    // Count the occurrences of each letter in letters
    for (let letter of letters) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    // Check if we can construct the message
    for (let char of message) {
      if (!letterCount[char]) {
        return false; // If the letter is not available, or we run out of it, return false
      }
      letterCount[char]--; // Decrease the count for that letter
    }
  
    return true; // If we successfully iterate through the message, return true
  }

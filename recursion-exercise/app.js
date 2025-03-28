//product of an array
function product(arr) {
    //base case
    if (arr.length === 1) {
        return arr[0];
    }

    // normal case
    return arr[0] * product(arr.slice(1));
}

//test
console.log(product([2, 3, 4]));


//return length of longest word from a list
function longestWord(words) {
    //base case
    if (words.length === 1) {
        return words[0].length;
    }

    //normal case
    const longestSoFar = longestWord(words.slice(1));
    return Math.max(words[0].length, longestSoFar);
}

//test
console.log(longestWord(["hello", "hi", "hola"])); 


//Every other character 
function everyOther(str) {
    //base case
    if (str.length <= 1) {
        return str;
    }

    //normal case
    return str[0] + everyOther(str.slice(2));
}

//test
console.log(everyOther("hello"));


//is palindrome
function isPalindrome(str) {
    //base case
    if (str.length <= 1) return true;

    //compare first and last letter
    if (str[0].toLowerCase() !== str[str.length -1].toLowerCase()) {
        return false;
    }
    //check rest of string
    return isPalindrome(str.slice(1,-1));
}

// Tests
console.log(isPalindrome("tacocat"));  
console.log(isPalindrome("tacodog")); 


//find index 
function findIndex(arr, str, currentIndex = 0) {
    //base case
    if (currentIndex >= arr.length) {
        return -1;
    }

    //if the current item matches the string, return the index
    if (arr[currentIndex] === str) {
        return currentIndex;
    }

    //normal case
    return findIndex(arr, str, currentIndex + 1);
}

// Test
let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat"));  
console.log(findIndex(animals, "porcupine"));   


//reverse string
function reverse(str) {
    //base case
    if (str.length <= 1) {
        return str;
    }
    //normal case
    return str.slice(-1) + reverse(str.slice(0,-1));
}

//gather strings
function gatherStrings(obj) {
    let strings = []
    function helper(currentObj) {
        for (let key in currentObj) {
          if (typeof currentObj[key] === 'string') {
            strings.push(currentObj[key]);
          } else if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
            // Recursive call if the value is an object
            helper(currentObj[key]);
            }
        }
    }
    
    helper(obj);
    return strings;
}

// Test
let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };
  
  console.log(gatherStrings(nestedObj));
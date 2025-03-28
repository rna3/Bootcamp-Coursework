// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let result = {};
  
    // Loop through the keys array
    for (let i = 0; i < keys.length; i++) {
      // Check if there are enough values, otherwise set to null
      result[keys[i]] = i < values.length ? values[i] : null;
    }
  
    return result;
  }
  

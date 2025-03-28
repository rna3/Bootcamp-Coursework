function addCommas(number) {
    // Convert the number to a string
  const [integerPart, decimalPart] = number.toString().split('.');
  
  // Handle the integer part with commas
  const formattedInteger = integerPart
    .replace(/^-?\d+/, (match) => {
      return match.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    });
  
  // Add the decimal part back if it exists
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

module.exports = addCommas;
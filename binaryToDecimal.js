const binaryToDecimal = (binary) => {
  let index = 0;
  let decimal = 0;
  while (binary > 0) {
    const digit = (binary % 10) * Math.pow(2, index);
    decimal += digit;
    binary = Math.floor(binary / 10);
    index++;
  }
  return decimal;
};

console.log(binaryToDecimal(111));

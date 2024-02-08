const octalToDecimal = (octal) => {
  let index = 0;
  let decimal = 0;
  while (octal > 0) {
    const digit = (octal % 10) * Math.pow(8, index);
    decimal += digit;
    octal = Math.floor(octal / 10);
    index++;
  }
  return decimal;
};

console.log(octalToDecimal(11));

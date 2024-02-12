const decimalToBinary = (decimal) => {
  const binary = [];
  let i = 0;
  while (decimal > 0) {
    let rem = decimal % 2;
    binary[i++] = rem;
    decimal = Math.floor(decimal / 2);
  }
  return binary.reverse();
};

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

const octalToBinary = (octal) => {
  const decimal = octalToDecimal(octal);
  return decimalToBinary(decimal);
};

console.log(octalToBinary(12).join(""));

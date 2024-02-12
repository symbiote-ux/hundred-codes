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

const decimalToOctal = (decimal) => {
  const octal = [];
  let i = 0;
  while (decimal > 0) {
    let rem = decimal % 8;
    octal[i++] = rem;
    decimal = Math.floor(decimal / 8);
  }
  return octal.reverse();
};

const binaryToOctal = (binary) => {
  const decimal = binaryToDecimal(binary);
  return decimalToOctal(decimal);
};

console.log(binaryToOctal(1010).join(""));

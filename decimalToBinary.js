const decimalToBinary = (decimal) => {
  const binary = [];
  let i = 0;
  while (decimal > 0) {
    let rem = decimal % 2;
    binary[i++] = rem;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
};

console.log(decimalToBinary(7).join(""));

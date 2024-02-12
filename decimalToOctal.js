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

console.log(decimalToOctal(148).join(""));

const decimalToHex = (decimal) => {
  const hexDigits = "0123456789ABCDEF";
  const hex = [];
  let i = 0;
  while (decimal > 0) {
    let index = decimal % 16;
    const digit = hexDigits.charAt(index);
    hex[i++] = digit;
    decimal = Math.floor(decimal / 16);
  }
  return hex.reverse();
};

console.log(decimalToHex(1457).join(""));

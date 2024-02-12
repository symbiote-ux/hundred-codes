const hexToDecimal = (hex) => {
  const digitsInHex = "0123456789ABCDEF";
  let decimal = 0;
  hex = hex.toUpperCase();
  for (let i = 0; i < hex.length; i++) {
    const digit = hex.charAt(i);
    const index = digitsInHex.indexOf(digit);
    const decDigit = index * Math.pow(16, i);
    decimal += decDigit;
  }
  return decimal;
};

console.log(hexToDecimal("11"));

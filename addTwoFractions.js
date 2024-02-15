const findHcf = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) num1 -= num2;
    else num2 -= num1;
  }
  return num1;
};

const addTwoFractions = (n1, d1, n2, d2) => {
  const denominator = d1 * d2;
  const numerator = n1 * d2 + n2 * d1;
  const hcf = findHcf(numerator, denominator);
  const finalDenominator = denominator / hcf;
  const finalNumerator = numerator / hcf;
  return { finalNumerator, finalDenominator };
};

console.log(addTwoFractions(1, 3, 3, 9));

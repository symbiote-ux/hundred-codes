const getFactorsSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const main = () => {
  const num1 = 6;
  const num2 = 28;

  const factorsSumOfNum1 = getFactorsSum(num1);
  const factorsSumOfNum2 = getFactorsSum(num2);
  const ratio1 = Math.floor(factorsSumOfNum1 / num1);
  const ratio2 = Math.floor(factorsSumOfNum2 / num2);
  console.log(ratio1 === ratio2 ? "Friendly Pair" : "Not Friendly Pair");
};

main();

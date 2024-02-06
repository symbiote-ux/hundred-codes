const getPerfectSum = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const main = () => {
  const num = 6;
  const perfectSum = getPerfectSum(num);
  console.log(num === perfectSum ? "Perfect" : "Not Perfect");
};

main();

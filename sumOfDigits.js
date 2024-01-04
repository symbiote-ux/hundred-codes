const getSum = (num) => {
  console.log(num);
  if (num == 0) return 0;
  return (num % 10) + getSum(Math.floor(num / 10));
};

console.log("sum of 123456", getSum(123456));

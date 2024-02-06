const fact = (num) => {
  if (num === 0) return 1;
  return num * fact(num - 1);
};

const getStrongSum = (num) => {
  if (num === 0) return 0;
  return fact(num % 10) + getStrongSum(Math.floor(num / 10));
};

const main = () => {
  const num = 145;
  const strongSum = getStrongSum(num);
  console.log(num === strongSum ? "strong" : "not strong");
};

main();

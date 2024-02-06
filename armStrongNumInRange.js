const getArmstrongSum = (num, order) => {
  if (num == 0) return 0;
  let digit = num % 10;
  return Math.pow(digit, order) + getArmstrongSum(Math.floor(num / 10), order);
};

const main = () => {
  const start = 1;
  const end = 1000;

  for (let i = start; i <= end; i++) {
    const order = i.toString().length;
    const armStrongSum = getArmstrongSum(i, order);
    if (i === armStrongSum) {
      console.log(i);
    }
  }
};

main();

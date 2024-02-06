const getArmstrongSum = (num, order) => {
  if (num == 0) return 0;
  let digit = num % 10;
  return Math.pow(digit, order) + getArmstrongSum(Math.floor(num / 10), order);
};

const main = () => {
  const num = 372;

  const order = num.toString().length;
  const armStrongSum = getArmstrongSum(num, order);
  console.log(num === armStrongSum ? "ArmStrong" : "Not ArmStrong");
};

main();

const hcf = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
};

const lcm = (num1, num2) => (num1 * num2) / hcf(num1, num2);

console.log(lcm(7, 2));

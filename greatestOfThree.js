const findGreatest = (num1, num2, num3) => {
  let greatest = num1;
  if (greatest < num2) {
    greatest = num2;
  }
  if (greatest < num3) {
    greatest = num3;
  }
  return greatest;
};

const main = () => {
  const greatest = findGreatest(-9, -4, 0);
  console.log("Greatest of Three: ", greatest);
};

main();

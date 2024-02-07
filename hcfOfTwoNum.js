const findHcf = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  console.log("HCF is", num1);
};

findHcf(36, 5);

const findPower = (num, order) => {
  if (order === 0) return 1;
  const base = num;
  while (order !== 1) {
    num *= base;
    order--;
  }
  return num;
};

console.log(findPower(5, 0));

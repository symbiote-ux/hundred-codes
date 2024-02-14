const fact = (num) => {
  if (num == 0) return 1;
  return num * fact(num - 1);
};

const findPermutation = (n, r) => {
  return fact(n) / fact(n - r);
};

console.log(findPermutation(5, 2));

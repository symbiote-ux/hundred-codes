const isPrime = (num) => {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 == 0) return false;

  for (let i = 3; i <= num / 2; i += 2) {
    if (num % i == 0) return false;
  }
  return true;
};

const main = () => {
  const start = 2;
  const end = 200;
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i, "\n");
    }
  }
};

main();

const isPrime = (num) => {
  if (num < 2) return false;

  let isPrime = true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      isPrime = false;
      return isPrime;
    }
  }
  return isPrime;
};

console.log("IsPrime", isPrime(1));

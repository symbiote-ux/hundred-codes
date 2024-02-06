const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

const findPrimeFactors = (num) => {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      let temp = num;
      while (temp % i === 0) {
        console.log(i);
        temp /= i;
      }
    }
  }
};

findPrimeFactors(100);

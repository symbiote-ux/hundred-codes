const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const printPrimeNumFromOneToHundred = () => {
  for (let i = 2; i < 100; i++) {
    if (isPrime(i)) console.log(i);
  }
};

printPrimeNumFromOneToHundred();

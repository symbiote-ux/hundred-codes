const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isSumOfTwoPrimes = (sum, num1, num2) => sum === num1 + num2;

const checkNumAsSumOfTwoPrimes = (num) => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (isPrime(i) && isPrime(num - i)) {
      return `Sum of two Primes ${i} and ${num - i}`;
    }
  }
  return 'Not Possible';
};

console.log(checkNumAsSumOfTwoPrimes(18));

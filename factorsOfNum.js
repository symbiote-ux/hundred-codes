const printFactors = (num) => {
  for (let i = 1; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i === num / i) {
        console.log(i, "\n");
      } else {
        console.log(i, "\n", num / i);
      }
    }
  }
};

printFactors(6);

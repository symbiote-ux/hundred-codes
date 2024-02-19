const countOccurrenceOfDigit = (num, digit) => {
  const digitList = num.toString().split('').map(Number);
  let count = 0;
  for (let i = 0; i < digitList.length; i++) {
    if (digitList[i] == digit) count++;
  }
  return count;
};

console.log(countOccurrenceOfDigit(12343343, 3));

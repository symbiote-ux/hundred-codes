const isLeapYear = (year) => {
  return year % 100 !== 0 && (year % 400 === 0 || year % 4 === 0);
};

console.log(isLeapYear(2100) ? "Leap year" : "Not a Leap year");

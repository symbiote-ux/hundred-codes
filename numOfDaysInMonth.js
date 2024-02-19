const getNumOfDaysInMonth = (month, year) => {
  const countOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (
    month === 2 &&
    (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
  ) {
    console.log(
      `Number of days in month ${month} of ${year} is: `,
      countOfDays[month - 1] + 1
    );
  } else {
    console.log(
      `Number of days in month ${month} of ${year} is: `,
      countOfDays[month - 1]
    );
  }
};

getNumOfDaysInMonth(7, 2023);

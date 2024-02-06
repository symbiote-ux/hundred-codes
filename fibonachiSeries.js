const printFibonachiSeries = (count) => {
  let prevTerm = -1;
  let nextTerm = 1;
  let currTerm = prevTerm + nextTerm;

  for (let i = 1; i <= count; i++) {
    console.log(currTerm);
    prevTerm = nextTerm;
    nextTerm = currTerm;
    currTerm = prevTerm + nextTerm;
  }
};

printFibonachiSeries(40);

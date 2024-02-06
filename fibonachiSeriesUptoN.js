const printFibonachiSeries = (till) => {
  let prevTerm = -1;
  let nextTerm = 1;
  let currTerm = prevTerm + nextTerm;
  for (let i = 0; i <= till; i++) {
    console.log(currTerm);
    if (currTerm > till) break;
    prevTerm = nextTerm;
    nextTerm = currTerm;
    currTerm = prevTerm + nextTerm;
  }
};

const main = () => {
  const till = 1;
  printFibonachiSeries(till);
};

main();

const replaceZeroWithOne = (num) => {
  return num
    .toString()
    .split('')
    .map((d) => (d == 0 ? (d = 1) : d))
    .join('');
};

console.log(replaceZeroWithOne(1200123001));

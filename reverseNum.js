const reverseNum = (num, rev) => {
  if (num == 0) return rev;
  let rem = num % 10;
  rev = rev * 10 + rem;
  return reverseNum(Math.floor(num / 10), rev);
};

console.log("reverse of 1234 is", reverseNum(1234, 0));

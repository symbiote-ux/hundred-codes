const countDecodingStrings = (sequence) => {
  let length = sequence.length;
  let count = new Array(length + 1).fill(0);
  count[0] = 1;
  count[1] = 1;
  for (let i = 2; i <= length; i++) {
    if (sequence[i - 1] > '0') {
      count[i] = count[i - 1];
    }
    if (
      sequence[i - 2] == '1' ||
      (sequence[i - 2] == '2' && sequence[i - 1] <= '6')
    ) {
      count[i] += count[i - 2];
    }
  }
  return count[length];
};

console.log(countDecodingStrings('123'));

const isHarshadNum = (num) => {
  let temp = num;
  let sum = 0;
  while (temp !== 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }
  return num % sum === 0;
};

console.log(isHarshadNum(11) ? "harshad" : "Not");

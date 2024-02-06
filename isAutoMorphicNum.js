const isAutomorphic = (num) => {
  const square = num * num;
  const order = num.toString().length;
  const divisor = Math.pow(10, order);
  const rem = square % divisor;
  return num === rem;
};

const main = () => {
  const num = 890625;
  console.log(isAutomorphic(num) ? "Automorphic" : "Not Automorphic");
};

main();

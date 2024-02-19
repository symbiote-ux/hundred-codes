const findRoots = (a, b, c) => {
  if (a === 0) return 'Invalid';
  const determinant = b * b - 4 * a * c;
  const sqrtValue = Math.sqrt(Math.abs(determinant));
  if (determinant > 0) {
    console.log('Roots are real and different');
    console.log((-b + sqrtValue) / (2 * a));
    console.log((-b - sqrtValue) / (2 * a));
    return;
  }
  if (determinant === 0) {
    console.log('Roots are real and same');
    console.log(-(b / (2 * a)));
    console.log(-(b / (2 * a)));
    return;
  }
  console.log('Roots are complex');
  console.log(-(b / (2 * a)) + '+ i' + sqrtValue);
  console.log(-(b / (2 * a)) + '- i' + sqrtValue);
  return;
};

console.log(findRoots(1, 4, 4));

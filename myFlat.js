const myFlat = (arr, depth = Infinity, result = []) => {
  arr.forEach((e) => {
    if (Array.isArray(e) && depth > 0) {
      myFlat(e, depth - 1, result);
    } else {
      result.push(e);
    }
  });
  return result;
};

console.log(myFlat([0, 1, [2, [3, [4, 5]]]], 2));

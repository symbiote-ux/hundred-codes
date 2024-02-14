const findQuadrant = (x, y) => {
  if (x == 0 && y == 0) return "Origin";
  if (x != 0 && y == 0) return "X-axis";
  if (x == 0 && y != 0) return "Y-axis";
  if (x > 0 && y > 0) return "Ist Quadrant";
  if (x < 0 && y > 0) return "2nd Quadrant";
  if (x < 0 && y < 0) return "3rd Quadrant";
  if (x > 0 && y < 0) return "4th Quadrant";
};

console.log(findQuadrant(1, -2));

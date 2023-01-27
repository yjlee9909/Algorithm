// Day 1: Arithmetic Operators
function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}

function getPerimeter(length, width) {
  let perimeter;
  perimeter = 2 * (length + width);
  return perimeter;
}

// Day 1: Functions
function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1;
}

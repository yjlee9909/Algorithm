let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let x = parseInt(input[0]);
let y = parseInt(input[1]);

if (y >= 45) {
  console.log(x, y - 45);
} else if (y < 45) {
  if (x === 0) {
    x = 23;
    y += 15;
    console.log(x, y);
  } else {
    console.log(x - 1, (y += 15));
  }
}
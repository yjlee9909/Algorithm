let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let result = "";

for (let i = 1; i <= input; i++) {
  result = " ".repeat(+input - i) + "*".repeat(i);
  console.log(result);
}
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const sum = parseInt(input[0]);
const num = parseInt(input[1]);

let total = 0;
for (let i = 2; i <= num + 1; i++) {
  total += parseInt(input[i].split(" ")[0]) * parseInt(input[i].split(" ")[1]);
}
if (sum === total) {
  console.log("Yes");
} else {
  console.log("No");
}

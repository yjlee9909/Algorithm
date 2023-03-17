const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);
input = input.sort((a, b) => a - b);
let arr = [];
for (let i = 1; i <= 30; i++) {
  if (input.includes(i)) continue;
  console.log(i);
}

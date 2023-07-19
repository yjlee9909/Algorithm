const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let level = 1;
let num = 1;
while (+input > num) {
  num += level * 6;
  level++;
}
console.log(level);

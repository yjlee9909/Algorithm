const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let arr = "";
for (let i = 1; i < input.length; i++) {
  let count = [0, 0, 0, 0];
  let coins = [25, 10, 5, 1];
  for (let j = 0; j < coins.length; j++) {
    count[j] += Math.floor(input[i] / coins[j]);
    input[i] %= coins[j];
  }
  console.log(count.join(" "));
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let score = input[1].split(" ").map((i) => +i);
let sum = 0;
const M = Math.max(...score);
const newScore = score.map((val) => (val / M) * 100);
const sumScore = newScore.reduce((acc, cur) => {
  return acc + cur;
});
console.log(sumScore / +input[0]);

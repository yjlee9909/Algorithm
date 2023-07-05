const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);
const arr = [1, 1, 2, 2, 2, 8];
let result = arr.map((i, idx) => i - input[idx]);
console.log(result.join(" "));
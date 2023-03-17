const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = +input[1];
let arr = [...input[0]];
console.log(arr[n - 1]);

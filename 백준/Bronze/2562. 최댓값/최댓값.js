let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const maxNum = Math.max(...input);
console.log(maxNum);
console.log(input.indexOf(`${maxNum}`) + 1);
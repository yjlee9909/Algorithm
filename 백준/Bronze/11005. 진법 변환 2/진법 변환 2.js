const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let decimal = (+input[0]).toString(input[1]);
console.log(decimal.toUpperCase());

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

for (let i = 1; i < input.length; i++) {
  let str = "";
  str += input[i].slice(0, 1);
  str += input[i].slice(input[i].length - 1, input[i].length);
  console.log(str);
}

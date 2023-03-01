let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const num = parseInt(input[0]);
let str = "";

for (let i = 1; i < num + 1; i++) {
  str +=
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]) + "\n";
}
console.log(str);
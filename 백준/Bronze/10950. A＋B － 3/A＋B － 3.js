let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const count = parseInt(input[0]);

let arr = [];
for (let i = 1; i <= count; i++) {
  console.log(
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
  );
}
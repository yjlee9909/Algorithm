let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = parseInt(input[0]);

for (let i = 1; i <= num; i++) {
  console.log(
    `Case #${i}: ${
      parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
    }`
  );
}
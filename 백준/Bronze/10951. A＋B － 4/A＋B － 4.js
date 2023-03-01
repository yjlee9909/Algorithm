let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
  );
}
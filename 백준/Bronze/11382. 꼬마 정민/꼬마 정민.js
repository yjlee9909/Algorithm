let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let sum = 0;
input.map((i) => {
  sum += parseInt(i);
});
console.log(sum);
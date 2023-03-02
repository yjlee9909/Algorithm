let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let cnt = 0;
let num = +input[2];
const arr = input[1].split(" ");
arr.map((i) => {
  if (+i === num) {
    cnt++;
  }
});
console.log(cnt);
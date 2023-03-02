let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0].split(" ")[0];
const M = +input[0].split(" ")[1];
let arr = new Array(N).fill(0);
for (let i = 1; i < input.length; i++) {
  const perArr = input[i].split(" ");
  for (let j = +perArr[0] - 1; j < +perArr[1]; j++) {
    arr[j] = +perArr[2];
  }
}
console.log(arr.join(" "));
let input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
let arr = input.map(Number);
arr.shift();
arr.sort((a, b) => a - b);
const set = Array.from(new Set(arr));
for (let i in set) {
  console.log(set[i])
}

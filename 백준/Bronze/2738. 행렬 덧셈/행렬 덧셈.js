const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
const [N, M] = input.shift();
let arr = new Array(N).fill().map(() => new Array(M).fill(0));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = input[i][j] + input[i + N][j];
  }
}
let ans = "";
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    ans += arr[i][j] + " ";
  }
  ans += "\n";
}
console.log(ans);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let nums = input.map((i) => i.split(" ").map((i) => +i));
// 누적합
let array = Array.from({ length: nums[1].length + 1 }, () => 0);
let answer = [];
nums[1].forEach((el, i) => {
  array[i + 1] = array[i] + el;
});
for (let i = 2; i < nums[0][1] + 2; i++) {
  let [start, end] = nums[i];
  answer.push(array[end] - array[start - 1]);
}
console.log(answer.join("\n"));

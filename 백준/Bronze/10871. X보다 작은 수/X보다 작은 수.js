let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = +input[0].split(" ")[1];

let arr = input[1].split(" ");
arr = arr.filter((i) => +i < num);
let result = "";
arr.forEach((i) => (result += i + " "));
console.log(result);
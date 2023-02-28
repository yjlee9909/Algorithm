let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const A = parseInt(input[0]);
const B = input[1];
const arrB = B.split("").reverse();

console.log(A * parseInt(arrB[0]));
console.log(A * parseInt(arrB[1]));
console.log(A * parseInt(arrB[2]));
console.log(A * parseInt(B));
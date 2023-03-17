const fs = require('fs');

const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')

let Array = input.map((input) => input % 42);
let set = new Set(Array);
const Arr = [...set];

console.log(Arr.length);
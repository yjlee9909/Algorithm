let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let arr = input.map((i) => parseInt(i));
const A = arr[0];
const B = arr[1];
const C = arr[2];

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
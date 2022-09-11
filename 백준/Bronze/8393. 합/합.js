let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
// 출력
let a = parseInt(input[0]);
let sum = 0;
for (let i = 0; i<=a; i++) {
    sum += i;
} 
console.log(sum);
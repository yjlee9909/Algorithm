let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ')
// 출력
let a = parseInt(input[0]);
for(let i = 1; i <=9; i++) {
    console.log(`${a} * ${i} = ${a*i}`)
}
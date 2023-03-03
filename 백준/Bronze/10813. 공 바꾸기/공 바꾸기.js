let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [N, M] = input[0].split(" ").map(i => +i);
let arr = Array.from(new Array(N), (x,i) => i + 1);

for (let i = 1; i <= M; i++) {
  let numArr = input[i].split(' ').map(n=>parseInt(n));
    let indexA = numArr[0] - 1;
    let indexB = numArr[1] - 1;
    let valueA = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = valueA;
}
console.log(arr.join(' '));
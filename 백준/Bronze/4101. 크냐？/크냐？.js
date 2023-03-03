let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  if (+input[i].split(" ")[0] > +input[i].split(" ")[1]) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
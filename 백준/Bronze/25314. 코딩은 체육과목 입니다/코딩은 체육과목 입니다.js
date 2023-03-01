let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
const num = parseInt(input);
const x = Math.round(num / 4);

let res = "";
for (let i = 0; i < x; i++) {
  if (i === x - 1) {
    res += "long int";
  } else {
    res += "long ";
  }
}
console.log(res);
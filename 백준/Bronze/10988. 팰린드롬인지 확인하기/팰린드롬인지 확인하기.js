const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();
let revStr = input.split("").reverse().join("");
if (input === revStr) console.log("1");
else console.log("0");
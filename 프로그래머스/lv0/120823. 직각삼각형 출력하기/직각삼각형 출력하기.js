const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = "";
    for (let i = 1; i <= input; i++) {
        for(let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result)
});
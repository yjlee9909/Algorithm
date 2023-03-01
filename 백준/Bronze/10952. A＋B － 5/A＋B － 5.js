let input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
input.pop();
for (let answer of input) {
    console.log(+answer.split(' ')[0] + +answer.split(' ')[1]);
}

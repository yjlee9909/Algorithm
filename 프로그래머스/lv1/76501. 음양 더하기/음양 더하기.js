//sol.1
// function solution(absolutes, signs) {
//     let arr = [];
//     for (let i = 0; i < absolutes.length; i++) {
//         if (signs[i] === true) {
//             arr.push(absolutes[i]);
//         } else {
//             arr.push(absolutes[i] * -1);
//         }
//     }
//     return arr.reduce((acc, cur) => acc + cur);
// }

// sol.2

function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1),0);
}


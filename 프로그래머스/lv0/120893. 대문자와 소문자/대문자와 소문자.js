// function solution(my_string) {
//     let answer = '';
//     for (let i of my_string) {
//         if (i === i.toUpperCase()) {
//             answer += i.toLowerCase();
//         } else {
//             answer += i.toUpperCase();
//         }
//     } 
//     return answer;
// }

// sol.2
function solution(my_string) {
    var answer = "";
    for (let c of my_string)
        answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}
// function solution(order) {
//     let count = 0;
//     order = Array.from(order.toString());
//     for (let i = 0; i < order.length; i ++) {
//         if (order[i] % 3 === 0 || order[i] % 6 === 0 || order[i] % 9 === 0) {
//             count++;
//         } 
//     }
//     return count;
// }
function solution(order) {
  return [...('' + order)].filter(num => num === '3' || num === '6' || num === '9').length;
}
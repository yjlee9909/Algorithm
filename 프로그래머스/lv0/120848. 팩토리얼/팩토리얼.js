// function solution(n) {
//     let result = 1;
//     let maxI = 1;
//     for (maxI = 1; maxI <= n; maxI++) {
//         result *= maxI;
//         if (result > n) return maxI - 1;
//     }
//     return maxI - 1;
// }

// sol.2

function solution(n) {
    let i = 1;
    let f = 1;
    while (f * i < n) f *= ++i;
    return i;
}
function solution(n) {
    // sol.1
    // var answer = [];
    // for (let i = 0; i <= n; i++) {
    //     if ((i % 2) === 1 ) {
    //         answer.push(i);
    //     }
    // }
    // return answer;
    
    // sol.2
    return Array(n).fill().map((_, i) => i + 1).filter(v => v % 2 !== 0);
}

// 파이썬
// def solution(n):
//     return [i for i in range(1, n + 1, 2)]
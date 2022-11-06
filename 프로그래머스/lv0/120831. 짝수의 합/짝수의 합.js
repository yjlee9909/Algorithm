function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i += 2) {
        answer += i
    }
    return answer;
}

// 파이썬
// sol.1
// def solution(n):
//     answer = 0
//     for i in range(0, n+1, 2):
//         answer += i
//     return answer

// // sol.2
// def solution(n):
//     answer = sum(range(0, n+1, 2))
//     return answer
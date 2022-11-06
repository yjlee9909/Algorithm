function solution(n) {
    // sol.1
    // const answer = [];
    // for (let i = 1; i <= n; i++) {
    //     if (n % i == 0) {
    //         answer.push(i);
    //     }
    // }
    // return answer;
    
    // sol.2
    return Array(n).fill().map((_, i) => i + 1).filter(v => n % v === 0);
}

// 파이썬

// sol.1
// def solution(n):
//     약수 = []
//     for i in range(1, n+1):
//         if n % i == 0:
//             약수.append(i)
//     return 약수

// sol.2
// def solution(n):
//     return [i for i in range(1, n+1) if n % i == 0]
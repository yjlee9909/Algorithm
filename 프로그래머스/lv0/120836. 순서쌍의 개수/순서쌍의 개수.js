function solution(n) {
    // sol.1
    // const answer = [];
    // // 반복문 돌면서 나머지가 0
    // for (let i = 1; i <= n; i++) {
    //     if(n % i === 0) {
    //         answer.push([i, parseInt(n / i)]);
    //     }
    // } 
    // return answer.length;
    
    // sol.2
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            answer += 1;
        }
    }
    return answer;

}

// 파이썬
// sol.1
// 시간초과 코드
// def solution(n):
//     answer = []
//     for i in range(1, n+1):
//         for j in range(1, n+1):
//             if i * j == n:
//                 answer.append([i, j])
//     return len(answer)


// sol.2
// def solution(n):
//     answer = 0
//     for i in range(n):
//         if n % (i+1) == 0:
//             answer += 1
//     return answer
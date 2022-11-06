function solution(n) {
    // sol.1
    // let answer = 0;
    // let sum = 0;
    // answer = n.toString().split('');
    // for(let i = 0; i < answer.length; i++) {
    //     sum += parseInt(answer[i],10);
    // }
    // return sum;
    
    // sol.2
    // return n.toString().split('').map(v => +v).reduce((acc, cur) => acc + cur);
    
    // sol.3
    return n.toString().split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
    
}

// 파이썬
// sol.1
// def solution(n):
//     return sum(map(int, str(n)))

// sol.2
// def solution(n):
//     s = 0
//     for i in str(n):
//         s += int(i)
//     return s
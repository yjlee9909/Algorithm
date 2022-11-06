function solution(money) {
    // sol.1
//     var answer = [];
//     answer.push(parseInt(money/5500));
//     answer.push(money - (5500*answer[0]));
//     return answer;
    
//     return [parseInt(money/5500),money - (5500*answer[0])]
    
    // sol.2
     return [~~(money/5500), money%5500];
}

// 파이썬
// def solution(money):
//     return [money//5500, money%5500]
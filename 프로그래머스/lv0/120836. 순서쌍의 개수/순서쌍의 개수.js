function solution(n) {
    const answer = [];
    // 반복문 돌면서 나머지가 0
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) {
            answer.push([i, parseInt(n / i)]);
        }
    } 
    return answer.length;
}
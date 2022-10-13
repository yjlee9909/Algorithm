function solution(n) {
    let answer = 0;
    let sum = 0;
    answer = n.toString().split('');
    for(let i = 0; i < answer.length; i++) {
        sum += parseInt(answer[i],10);
    }
    return sum;
}
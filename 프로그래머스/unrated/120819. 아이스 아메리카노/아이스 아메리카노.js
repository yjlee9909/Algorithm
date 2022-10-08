function solution(money) {
    var answer = [];
    answer.push(parseInt(money/5500));
    answer.push(money - (5500*answer[0]));
    return answer;
}
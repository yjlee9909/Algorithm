function solution(start, end) {
    var answer = [];
    for (let i = start; end <= i; i--) {
        answer.push(i)
    }
    return answer;
}
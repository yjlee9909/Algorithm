function solution(numbers) {
    var answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer += parseInt(numbers[i]);
    }
    return (answer/numbers.length);
}
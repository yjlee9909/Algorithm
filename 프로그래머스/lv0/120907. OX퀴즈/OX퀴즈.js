function solution(quiz) {
    return quiz.map(item => {
        const [num, answer] = item.split("=");
        return eval(num) === +answer ? "O" : "X";
    })
}
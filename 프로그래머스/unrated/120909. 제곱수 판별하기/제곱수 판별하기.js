function solution(n) {
    const answer = (n % (Math.sqrt(n))) === 0 ? 1 : 2;
    return answer;
}
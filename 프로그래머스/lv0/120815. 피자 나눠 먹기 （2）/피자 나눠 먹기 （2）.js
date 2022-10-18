function solution(n) {
    let result = [];
    for (let i = 1; i <= n * 6; i++) {
        if (((i % 6) === 0) &&((i % n) === 0)) {
            result.push(i);
        }
    }
    return parseInt(result[0])/6;
}
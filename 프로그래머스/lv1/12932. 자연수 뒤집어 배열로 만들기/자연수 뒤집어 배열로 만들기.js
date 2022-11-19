function solution(n) {
    return n.toString().split('').reverse().map(item => parseInt(item))
}
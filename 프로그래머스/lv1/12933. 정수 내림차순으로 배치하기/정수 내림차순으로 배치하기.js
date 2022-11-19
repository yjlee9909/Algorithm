function solution(n) {
    return parseInt(n.toString().split('').sort((a,b) => b - a).map(i => parseInt(i)).join(''))
}
function solution(array) {
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}

// 파이썬
// def solution(array):
//     return [max(array), array.index(max(array))]
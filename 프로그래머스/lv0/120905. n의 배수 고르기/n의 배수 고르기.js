function solution(n, numlist) {
    // filter -> 주어진 함수의 테스트를 통과하는 요소를 모아 새로운 배열로 반환
    return numlist.filter(i => i % n === 0);
}

// 파이썬
// def solution(n, numlist):
//     return [i for i in numlist if i % n == 0]
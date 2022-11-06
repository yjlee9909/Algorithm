function solution(array, n) {
    // sol.1
    // let count = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === n) {
    //         count ++;
    //     }
    // }
    // return count;
    
    // sol.2
    return array.filter(v => v === n).length;
}

// 파이썬 코드
// def solution(array, n):
//     return array.count(n)
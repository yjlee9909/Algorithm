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
    console.log(array.filter(v => v === n))
    console.log(array)
    return array.filter(v => v === n).length;
    
    // sol.3
    // answer = 0
    // for (num of array) if (num === n) answer++
    // return answer
}

// 파이썬 코드
// def solution(array, n):
//     return array.count(n)
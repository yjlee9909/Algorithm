function solution(numbers, num1, num2) {
    // sol.1
    // return numbers.slice(num1, num2+1);
    
    // sol.2
    return numbers.splice(num1, num2 - num1 + 1);
}

// 파이썬
// def solution(numbers, num1, num2):
//     return numbers[num1:num2+1]

// splice
// let test = [1, 2, 3, 4, 5, 6, 7]
// test.splice(2, 4, [10, 20])
// (4) [3, 4, 5, 6]
// test
// (4) [1, 2, Array(2), 7]0: 11: 22: (2) [10, 20]3: 7length: 4[[Prototype]]: Array(0)
// let test = [1, 2, 3, 4, 5, 6, 7]
// test.splice(2, 4, 10, 20)
// (4) [3, 4, 5, 6]
// test
// (5) [1, 2, 10, 20, 7]
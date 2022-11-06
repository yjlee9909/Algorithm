// function solution(numbers) {
//     // 정렬 후 곱
//     numbers = numbers.sort((a,b) => b-a);
//     return (numbers[0] * numbers[1]);
// }
function solution(numbers) {
    // sol.1
    // numbers.sort(function(a, b) {
    //     return a - b;
    // });
    // max1 = numbers.slice(-1);
    // max2 = numbers.slice(-2);
    // console.log(typeof(max1));
    // console.log(typeof(parseInt(max1)));
    // return parseInt(max1) * parseInt(max2);
    
    // sol.2
    const 정렬된값 = numbers.sort((a, b) => a - b).reverse();
    return 정렬된값[0] * 정렬된값[1]
}

// 파이썬

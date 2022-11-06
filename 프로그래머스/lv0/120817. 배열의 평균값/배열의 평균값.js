function solution(numbers) {
    let sum = 0;
    sum = numbers.reduce((acc, cur) => acc + cur);
    return sum / numbers.length;
    // for (let i = 0; i < numbers.length; i++) {
    //     sum += parseInt(numbers[i]);
    // }
    // return (sum/numbers.length);
}
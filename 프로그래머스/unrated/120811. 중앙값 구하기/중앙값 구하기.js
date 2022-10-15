function solution(array) {
    var answer = 0;
    array.sort((a,b) => a - b);
    return array[Math.floor(array.length/2)];
}
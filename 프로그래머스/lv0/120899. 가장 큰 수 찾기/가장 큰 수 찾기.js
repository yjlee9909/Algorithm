function solution(array) {
    let arr = [];
    arr.push(Math.max(...array));
    arr.push(array.indexOf(arr[0]));
    return arr;
}
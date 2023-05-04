function solution(arr, k) {
    let arr2 = [];
    arr.map(i => {
        if (k % 2 === 0) {
            return arr2.push(i + k);
        } else {
            return arr2.push(i * k);
        }
    })
    return arr2;
}
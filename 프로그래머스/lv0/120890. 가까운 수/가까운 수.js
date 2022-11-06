// function solution(array, n) {
//     let obj = {};
//     // 두 수의 차를 value로
//     array.forEach(item => {
//         obj[item] = Math.abs(item - n);
//     })
//     const minNum = Math.min(...Object.values(obj));
//     return parseInt(Object.keys(obj).find(key => obj[key] === minNum));
// }

// sol.2
function solution(array, n) {
    array.sort((a, b) => a - b);
    let diff = Infinity;
    let ind = Infinity;
    for (let i in array) {
        let calc = Math.abs(n - array[i]);
        if (calc < diff) {
            diff = calc;
            ind = i;
        }
    }
    return array[ind];
}
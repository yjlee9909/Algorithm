function solution(arr) {
    let minNum = 0;
    minNum = Math.min(...arr);   
    console.log(minNum)
    arr = arr.filter(v => v !== minNum);
    console.log(arr)
    return arr.length > 0 ? arr : [-1]
}
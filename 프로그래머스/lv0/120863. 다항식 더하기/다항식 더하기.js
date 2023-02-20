function solution(polynomial) {
    let arr = [];
    let arrX = [];
    let arrN = [];
    let numX = 0;
    let num = 0;
    let answer = [];
    arr = polynomial.split(" + ");
    console.log(arr)
    arr.filter(item => {
        if (item.includes('x')) {
            arrX.push(item)
        } else {
            arrN.push(item)
        }
    })
    arrX.map(item => {
        const strVal = item.replace("x", "") || "1";
        numX += parseInt(strVal, 10);
    })
    arrN.map(item => num += parseInt(item));
   
    if (numX) answer.push(`${numX === 1 ? "" : numX}x`);
    if (num) answer.push(num);
    return answer.join(" + ");
}
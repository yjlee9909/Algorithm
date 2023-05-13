function solution(num_list) {
    let num1 = [];
    let num2 = [];
    num_list.map(i => {
        if (i % 2 === 0) num1.push(i);
        else num2.push(i);
    })
    return parseInt(num1.join('')) + parseInt(num2.join(''));
}
function solution(my_string) {
    // let answer = 0;
    // // 반복문 돌려 숫자인 경우에만 합하기 isNaN -> 숫자가 아닌 경우 true
    // my_string = my_string.split('');
    // for (let i = 0; i < my_string.length; i++) {
    //     if (isNaN(my_string[i]) === false) {
    //         answer += parseInt(my_string[i]);
    //     }
    // }
    // return answer;
    
    // sol.2
    return my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b));
}
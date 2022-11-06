function solution(my_string, n) {
    // sol.1
    // for문 하나씩 뽑아 repeat후 새로운 배열로 합하기
    // let answer = '';
    // for (let i = 0; i < my_string.length; i ++) {
    //     answer+=(my_string[i].repeat(n));
    // }
    // return answer;
    
    // sol.2
    return my_string.split('').map(i => i.repeat(n)).join('').toString()
}
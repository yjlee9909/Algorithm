function solution(my_string) {
    // var answer = my_string.split('').reverse().join('');
    let str = '';
    for (let i = my_string.length-1; i >= 0; i--) {
        str += my_string[i];
    }
    return str;
}
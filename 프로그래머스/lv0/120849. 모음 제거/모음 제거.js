function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

// 파이썬

// sol.1
// def solution(my_string):
//     return my_string.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')

// sol.2
// import re

// def solution(my_string):
//     return re.sub(r'[aeiou]', '', my_string)
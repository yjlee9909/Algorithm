function solution(my_string) {
    // sol.1
    // return my_string.replace(/[aeiou]/g, '');
    
    // sol.2
    return Array.from(my_string)
        .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
        .join("");
}

// 파이썬

// sol.1
// def solution(my_string):
//     return my_string.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')

// sol.2
// import re

// def solution(my_string):
//     return re.sub(r'[aeiou]', '', my_string)
function solution(s1, s2) {
    // let result = 0;
    // for (let i = 0; i < s1.length; i++) {
    //     for (let j = 0; j < s2.length; j++) {
    //         if (s1[i] === s2[j]) {
    //             result++;
    //         }
    //     }
    // }
    // return result;
    
    // sol.2
    const i = s1.filter((x) => s2.includes(x));
    return i.length;
}

// 파이썬
// def solution(s1, s2):
//     return len(set(s1) & set(s2))
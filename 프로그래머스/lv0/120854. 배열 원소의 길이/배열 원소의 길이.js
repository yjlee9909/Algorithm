function solution(strlist) {
    // sol.1
    // var answer = [];
    // for (let i = 0; i < strlist.length; i++) {
    //     answer.push(strlist[i].length);
    // }
    // return answer;
    
    // sol.2
    return strlist.map(v => v.length)
}

// 파이썬
// sol.1
// def solution(strlist):
//     arr = []
//     for i in strlist:
//         arr.append(len(i))
//     return arr

// sol.2
// def solution(strlist):
//     return [len(i) for i in strlist]

// sol.3
// def solution(strlist):
//     return list(map(lambda x:len(x), strlist))
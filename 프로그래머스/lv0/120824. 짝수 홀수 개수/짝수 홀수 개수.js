function solution(num_list) {
    // sol.1
    // let answer = [0,0];
    // for (let i = 0; i < num_list.length; i++) {
    //     if ((num_list[i] % 2) === 0) {
    //         answer[0] = parseInt(answer[0]) + 1;
    //     } else {
    //         answer[1] = parseInt(answer[1]) + 1;
    //     }
    // }
    // return answer;
    
    // sol.2
    let answer = [0, 0]
    for (i of num_list){
        answer[i % 2] += 1
    }
    return answer
}

// 파이썬
// sol.1
// def solution(num_list):
//     answer = [0, 0]
//     for i in num_list:
//         answer[i % 2] += 1
//     return answer


// sol.2
// def solution(num_list):
//     짝수 = 0
//     홀수 = 0
//     for i in num_list:
//         if i % 2 == 0:
//             짝수 += 1
//         else:
//             홀수 += 1
//     return [짝수, 홀수]
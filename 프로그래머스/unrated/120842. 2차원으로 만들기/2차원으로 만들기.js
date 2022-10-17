function solution(num_list, n) {
    const answer = [];
    console.log(num_list.length)
    for(let i = 0; i < num_list.length; i + n) {
        answer.push(num_list.splice(i,i+n));
    }
    return answer;
}
function solution(num_list, n) {
    let ans = [];
    for (let i = n-1; i < num_list.length; i++) {
        ans.push(num_list[i]);
    }
    return ans;
}
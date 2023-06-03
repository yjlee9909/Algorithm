function solution(num_list) {
    let ans = num_list.length >= 11 ? 0 : 1;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list.length >= 11) {
            ans += num_list[i];
        } else {
            ans *= num_list[i];
        }
    }
    return ans;
}
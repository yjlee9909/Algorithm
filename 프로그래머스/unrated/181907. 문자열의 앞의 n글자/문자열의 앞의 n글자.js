function solution(my_string, n) {
    let arr = my_string.split("");
    let ans = "";
    for (let i = 0; i < n; i++) {
        ans += my_string[i];
    }
    return ans;
}
function solution(num_str) {
    let ans = 0;
    let arr = num_str.split("")
    for(let i = 0; i < num_str.length; i++) {
        ans += parseInt(arr[i])
    }
    return ans;
}
function solution(numbers) {
    let ans = 0;
    for (let i = 0; i<= 9; i++) {
        if (!numbers.includes(i)) 
            ans += i;}
    return ans;
}
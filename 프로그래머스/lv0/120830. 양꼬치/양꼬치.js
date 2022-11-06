function solution(n, k) {
    // sol.1
    // if (n < 10) {
    //     return (n * 12000) + (k * 2000);
    // } else {
    //     return (n * 12000) + 2000*(k-~~(n/10));
    // }  
    
    // sol.2
    if (n >= 10){
        k -= ~~(n / 10)
    }
    return n * 12000 + k * 2000

}

// 파이썬
// def solution(n, k):
//     if n >= 10:
//         k -= n // 10
//     return n * 12000 + k * 2000
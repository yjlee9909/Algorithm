function solution(n) {
    // sol.1
    // return (n % (Math.sqrt(n))) === 0 ? 1 : 2;
    
    // sol.2
    if (n == (~~(n ** 0.5)) ** 2){
        return 1
    }
    return 2

}

// 파이썬
// def solution(n):
//     if n == int(n ** 0.5) ** 2:
//         return 1
//     return 2
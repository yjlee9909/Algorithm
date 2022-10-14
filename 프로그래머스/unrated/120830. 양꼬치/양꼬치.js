function solution(n, k) {
    if (n < 10) {
        return (n * 12000) + (k * 2000);
    } else {
        return (n * 12000) + 2000*(k-parseInt(n/10));
    }  
}
function solution(num, k) {
    return num.toString().includes(k) ? num.toString().indexOf(k) + 1 : -1;
}
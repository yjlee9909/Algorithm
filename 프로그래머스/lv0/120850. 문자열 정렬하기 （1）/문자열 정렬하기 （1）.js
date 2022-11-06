function solution(my_string) {
    // 정규식으로 문자 제거
    // my_string = my_string.replace(/[^0-9]/g, "");
    // my_string = [...my_string].map((i) => parseInt(i)).sort((a ,b) => a - b);
    // return my_string;
    
    // sol.2
        return my_string
        .match(/\d/g)
        .sort((a, b) => a - b)
        .map((n) => Number(n));
}
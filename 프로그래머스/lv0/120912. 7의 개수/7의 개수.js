function solution(array) {
    array = array.join('');
    // 7 기준 분리
    return array.split(7).length - 1;
}
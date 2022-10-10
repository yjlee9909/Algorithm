function solution(my_string, letter) {
    var answer = '';
    answer = my_string.replaceAll(letter, '');
    return answer;
}
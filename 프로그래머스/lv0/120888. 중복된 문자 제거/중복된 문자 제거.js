function solution(my_string) {
    my_string = my_string.split('');
    const set = [...new Set(my_string)];
    return set.join('')
}
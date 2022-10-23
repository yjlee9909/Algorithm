function solution(my_string, num1, num2) {
    let empty = [];
    my_string = [...my_string]
    empty.push((my_string[num1]));
    my_string.splice(num1, 1, my_string[num2]);
    my_string.splice(num2, 1, empty.toString());
    return my_string.join("");
}
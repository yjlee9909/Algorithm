function solution(order) {
    var answer = 0;
    return Array.from(order.toString()).filter(
        item => ['3', '6', '9'].includes(item)).length;
}
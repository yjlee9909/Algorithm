function solution(dot) {
    if ((dot[0] > 0) && (dot[1] > 0)) {
        return 1;
    } else if ((dot[0] < 0) && (dot[1] > 0)) {
        return 2;
    } else if ((dot[0] < 0) && (dot[1] < 0)) {
        return 3;
    } else return 4;
}

// 파이썬
// def solution(dot):
//     x, y = dot
//     if x >= 0 and y >= 0:
//         return 1
//     elif x < 0 and y >= 0:
//         return 2
//     elif x < 0 and y < 0:
//         return 3
//     elif x >= 0 and y < 0:
//         return 4
//     return answer
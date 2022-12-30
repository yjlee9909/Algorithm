let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

function solution(array, commands) {
    return commands.map(
        ([from, to, k]) =>
            array.slice(from - 1, to).sort((a, b) => a - b)[k - 1],
    );
}
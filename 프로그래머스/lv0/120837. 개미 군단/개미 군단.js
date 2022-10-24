function solution(hp) {
    const 장군개미수 = parseInt(hp / 5);
    const 병정개미수 = parseInt((hp % 5) / 3);
    const 일개미수 = parseInt(((hp % 5) % 3) / 1);
    return 장군개미수 + 병정개미수 + 일개미수;
}
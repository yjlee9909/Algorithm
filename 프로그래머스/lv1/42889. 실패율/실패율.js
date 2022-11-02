function solution(N, stages) {
    let 실패율 = [];
    let 유저수 = stages.length;

    for (let i = 1; i <= N; i++) {
        let 도달한사람수 = stages.filter((user) => user === i).length;
        let 확률 = 도달한사람수 / 유저수;
        실패율.push({ 스테이지: i, 확률 });
        유저수 -= 도달한사람수;
        console.log(유저수, 도달한사람수);
    }

    // 정렬 기준 확인 필요
    실패율.sort((a, b) => {
        if (a.확률 < b.확률) return 1;
        if (a.확률 > b.확률) return -1;
        if (a.확률 === b.확률) return 0;
    });
    return 실패율.map((object) => object.스테이지);
}
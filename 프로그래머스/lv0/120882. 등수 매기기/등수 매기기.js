function solution(score) {
    const dict = {}
    const rank = score
        .map(([a,b]) => (a+b)/2)
        .sort((a,b) => b-a)
        .forEach((a,i) => dict[a] === undefined ? dict[a] = i+1 : null)
    return score.map(([a,b]) => dict[(a+b)/2])
}